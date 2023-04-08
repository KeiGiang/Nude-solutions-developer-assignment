using nude_assignment.Configurations;
using nude_assignment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace nude_assignment.Services;

public class ContentItemService : IContentItemService {
  private readonly IMongoCollection<ContentItem> _insuredContentItemCollection;

  public ContentItemService (IOptions<DatabaseSettings> databaseSettings) {
    var mongoClient = new MongoClient(databaseSettings.Value.ConnectionString);
    var mongoDb = mongoClient.GetDatabase(databaseSettings.Value.DatabaseName);

    _insuredContentItemCollection = 
      mongoDb.GetCollection<ContentItem>(databaseSettings.Value.CollectionName);
  }

  public async Task<List<ContentItem>> GetAsync() =>
    await _insuredContentItemCollection.Find(_ => true).ToListAsync();

  public async Task<ContentItem> GetAsync(string id) =>
    await _insuredContentItemCollection.Find(
        x => x.Id == id).FirstOrDefaultAsync();

  public async Task CreateAsync(ContentItem item) =>
    await _insuredContentItemCollection.InsertOneAsync(item);

  public async Task UpdateAsync(string id, ContentItem item) =>
    await _insuredContentItemCollection.ReplaceOneAsync(x => x.Id == id, item);

  public async Task DeleteAsync(string id) =>
    await _insuredContentItemCollection.DeleteOneAsync(x => x.Id == id);

  public async Task<List<ContentItemCategorySummary>> GetCategorySummaries() {
    List<ContentItem> items =
      await _insuredContentItemCollection.Find(_ => true).ToListAsync();

    List<ContentItemCategorySummary> summaries =
      new List<ContentItemCategorySummary>();

    foreach(ContentItemCategory category in Enum.GetValues(typeof(ContentItemCategory))) {
      int sum = items.Where(
          item => item.category == category)
          .Aggregate(0, (acc, item) => acc + item.valueCents);

      summaries.Add(new ContentItemCategorySummary{
          category = category,
          valueCents = sum
          });
    }

    setTotalValue(items, summaries);

    return summaries;
  }

  private List<ContentItemCategorySummary> setTotalValue(
      List<ContentItem> items,
      List<ContentItemCategorySummary> summaries) {
    int totalValue = items.Aggregate(0, (acc, item) => acc + item.valueCents);

    ContentItemCategorySummary? total = summaries.Find(
        summary => summary.category == ContentItemCategory.Total);

    if (total == null) {
      return summaries;
    }

    total.valueCents = totalValue;

    return summaries;
  }
}

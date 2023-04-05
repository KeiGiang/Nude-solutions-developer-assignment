using nude_assignment.Configurations;
using nude_assignment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace nude_assignment.Services;

public class ContentItemService {
  private readonly IMongoCollection<ContentItem> _insuredContentItemCollection;

  public ContentItemService (IOptions<DatabaseSettings> databaseSettings) {
    var mongoClient = new MongoClient(databaseSettings.Value.ConnectionString);
    var mongoDb = mongoClient.GetDatabase(databaseSettings.Value.DatabaseName);

    _insuredContentItemCollection = mongoDb.GetCollection<ContentItem>(databaseSettings.Value.CollectionName);
  }

  public async Task<List<ContentItem>> GetAsync() => await _insuredContentItemCollection.Find(_ => true).ToListAsync();

  public async Task<ContentItem> GetAsync(string id) => await _insuredContentItemCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

  public async Task CreateAsync(ContentItem item) => await _insuredContentItemCollection.InsertOneAsync(item);

  public async Task UpdateAsync(ContentItem item) => await _insuredContentItemCollection.ReplaceOneAsync(x => x.Id == item.Id, item);

  public async Task RemoveAsync(string id) => await _insuredContentItemCollection.DeleteOneAsync(x => x.Id == id);
}

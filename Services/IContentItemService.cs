using nude_assignment.Models;

namespace nude_assignment.Services;

public interface IContentItemService {
  Task<List<ContentItem>> GetAsync();
  Task CreateAsync(ContentItem item);
  Task DeleteAsync(string id);
  Task<List<ContentItemCategorySummary>> GetCategorySummaries();
}


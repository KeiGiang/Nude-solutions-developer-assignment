using nude_assignment.Models;

namespace nude_assignment.Services;

public interface IContentItemService {
  Task<List<ContentItem>> GetAsync();
  Task<ContentItem> GetAsync(string id);
  Task CreateAsync(ContentItem item);
  Task UpdateAsync(string id, ContentItem item);
  Task DeleteAsync(string id);
}


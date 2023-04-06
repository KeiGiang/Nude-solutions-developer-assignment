using Microsoft.AspNetCore.Mvc;
using nude_assignment.Services;
using nude_assignment.Models;

namespace nude_assignment.Controllers;

[ApiController]
[Route("[controller]")]
public class ContentItemController : ControllerBase {
    private readonly IContentItemService _itemService;
    private readonly ILogger<ContentItemController> _logger;

    public ContentItemController(ContentItemService itemService, ILogger<ContentItemController> logger)
    {
        _itemService = itemService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<List<ContentItem>> Get() {
      return await _itemService.GetAsync();
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ContentItem item) {
      await _itemService.CreateAsync(item);
      return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(string id, [FromBody] ContentItem item ) {
      await _itemService.UpdateAsync(id, item);
      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id) {
      await _itemService.DeleteAsync(id);
      return NoContent();
    }
}

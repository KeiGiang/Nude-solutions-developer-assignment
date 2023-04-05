using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace nude_assignment.Models;

public class ContentItem {
  public enum Category {
    Electronics,
    Clothing,
    Kitchen,
  }

  [BsonId]
  [BsonRepresentation(BsonType.ObjectId)]
  public string? Id { get; set; }

  [BsonElement("Name")]
  public string ItemName { get; set; }

  public int ValueCents { get; set; }

  [BsonElement("Category")]
  public Category ItemCategory { get; set; }
}


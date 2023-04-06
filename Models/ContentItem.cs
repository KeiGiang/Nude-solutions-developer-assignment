using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace nude_assignment.Models;

public class ContentItem {
  [BsonId]
  [BsonRepresentation(BsonType.ObjectId)]
  public string? Id { get; set; }

  public string name { get; set; }

  public int valueCents { get; set; }

  public Category category { get; set; }
}


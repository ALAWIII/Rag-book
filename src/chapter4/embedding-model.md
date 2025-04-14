# Embedding Models


Embedding models transform text into high-dimensional vectors that represent semantic meaning. The quality of these embeddings is crucial for effective retrieval.

---
Key Considerations:

   - Must support both the query and the document chunks.

   - Should be trained or fine-tuned on similar types of text.

   - Trade-off: Smaller models are faster; larger models are more accurate.


Common Embedding Models:

| Model Name                | Type  | Notes                                           |
|--------------------------|--------|-------------------------------------------------|
| intfloat/e5-small-v2     | Dense | Lightweight and fast; good baseline              |
| intfloat/e5-large-v2     | Dense | More accurate; used for robust retrieval         |
| BAAI/bge-small-en        | Dense | High-quality general-purpose model               |
| BAAI/bge-large-en-v1.5   | Dense | One of the most accurate public models           |
| GTE-base / GTE-small     | Dense | Lightweight alternatives by Alibaba              |
| all-mpnet-base-v2        | Dense | From SentenceTransformers; widely used baseline  |
| Jina Embeddings v2       | Dense | Optimized for semantic search                    |

Choosing a Model:
  - for production use we went with **```nomic-embed-text```** .

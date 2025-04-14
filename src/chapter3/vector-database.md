# Vector Databases


Vector databases are the backbone of the retrieval process in RAG systems. They store embeddings of document chunks and enable efficient similarity-based search.

---
Key Features of Vector Databases:

   - Index Types: How the database organizes data for efficient lookup.

   - Scale: How much data it can handle efficiently.

   - Hybrid Search: Ability to combine vector search with keyword or metadata filtering.

   - Cloud Ready: Whether it is designed to run easily in cloud environments.

   - Notes: Special features, ecosystem, or language support.

Popular Vector Databases:

| Name      | Index Types     | Scale        | Hybrid Search | Cloud Ready | Notes                              |
|-----------|------------------|--------------|----------------|--------------|-------------------------------------|
| **Faiss**     | IVF, HNSW         | Local, fast  | ❌             | ❌           | High-performance C++/Python library |
| **Milvus**    | IVF, HNSW         | Billion+     | ✅             | ✅           | Scalable and enterprise-grade       |
| **Qdrant**    | HNSW              | Million+     | ✅             | ✅           | Rust/Python API, cloud-native       |
| **Weaviate**  | HNSW              | ~10M+        | ✅             | ✅           | Strong semantic + metadata filters  |
| **Chroma**    | HNSW (simple)     | Small-medium | ✅             | ✅ (basic)   | Lightweight, easy local setup       |
| [**SurrealDB**](https://surrealdb.com/) | MTREE, HNSW | Billion+ | ✅             | ✅           | Multi-model DB, integrates SQL+Vec  |
---

## Summary of the Workflow

The full RAG pipeline includes:

   1. Classifying the query to see if retrieval is needed.

   2. Retrieving relevant documents using similarity search.

   3. Reranking results for improved precision.

   4. Repacking or organizing the information.

   5. Summarizing it (optional, for length or clarity).

   6. Generating the final answer using an LLM.

This modular workflow allows RAG systems to be flexible, extensible, and adaptable to various real-world needs.

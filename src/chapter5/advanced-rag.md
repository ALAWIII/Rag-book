# Advanced RAG Improvements


Advanced RAG refers to systems that build upon the limitations of Naive RAG by optimizing both retrieval and generation using additional strategies.

---
Pre-Retrieval Enhancements

These are techniques applied before fetching documents:

   1. Query Rewriting

       - Rephrases or expands the user query to better match stored documents.

       - Example: Rewriting “LLM” → “large language model”.

   2. Query Expansion

       - Adds additional terms or synonyms to improve recall.

       - Useful in domain-specific vocabularies or ambiguous queries.

   3. Multi-query Retrieval

       - Splits the user query into several sub-queries, retrieves separately, and merges results.

       - Helps cover more ground and improve completeness.

   4. Use of Metadata Filters

       - Filters retrieval using metadata (e.g., document_type = "FAQ").

       - Increases precision by eliminating irrelevant sections.
---
Post-Retrieval Enhancements

These are applied after initial document retrieval, before feeding them to the generator:

   1. Reranking

       - Uses a secondary model to reorder retrieved documents by semantic relevance.

       - Can be done using cross-encoders or reranking LLMs.

   2. Context Compression

       - Reduces retrieved content using summarization or token pruning.

       - Helps fit more content within LLM token limits.

   3. Repacking and Ordering

       - Rearranges documents to improve logical flow.

       - Example: Grouping by source or time, sorting by importance.

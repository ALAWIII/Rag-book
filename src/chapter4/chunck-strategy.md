# Chunking Strategies

Chunking is the process of dividing documents into smaller, manageable pieces (called “chunks”) before storing them in the vector database. Chunking is critical because LLMs and retrievers work better when each unit of content is coherent, compact, and semantically meaningful.

---
Types of Chunking:

   1. Token-Level Chunking

       - Splits documents based on token count.

       - Simple but may cut through sentences or break context.

       - Often used in systems with strict token budgets.

       - ⚠️ Risk: May reduce semantic relevance.

   2. Sentence-Level Chunking

       - Breaks text at sentence boundaries.

       - Balances semantic coherence with manageable length.

       - Most commonly used in production systems.

       - ✅ Recommended for general-purpose RAG systems.

   3. Semantic-Level Chunking

       - Uses LLMs to determine natural breakpoints based on meaning.

       - Most context-preserving but also the most expensive.

       - Great for long-form content like books, reports, or research.

---
Advanced Chunking Techniques:

   - Sliding Window

       - Creates overlapping chunks to preserve context across splits.

       - Example: 512-token chunks with 20-token overlap.

       - Reduces risk of splitting crucial information across chunks.

   - Small-to-Big (S2B)

       - Retrieves small precise chunks.

       - Then expands to include their parent (larger) chunks for full context.

       - Improves both precision and recall in retrieval.

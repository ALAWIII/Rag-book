# Core Components

1) Retriever

   - Searches a database to find relevant documents based on the user query.
   - Uses similarity search (e.g., cosine similarity between vector embeddings).

   - Types:

     - Sparse retrievers: Traditional (e.g., BM25).

     - Dense retrievers: Modern (e.g., dual encoder models).

     - Hybrid: Combines both.

2) Generator

   - Receives the query and the retrieved content.

   - Produces a final answer using natural language.

   - Usually a pretrained model like GPT, LLaMA, or T5.

3) Knowledge Base (Corpus)

   - The source of truth (e.g., documents, web pages, PDFs).

   - Preprocessed into small “chunks” and embedded as vectors.

   - Stored in vector databases for efficient similarity search.

4) Augmentation Layer

   - Optional enhancements to improve quality:

       - Query rewriting

       - Reranking

       - Chunk compression or repacking

       - Metadata filtering

# Modular RAG


Modular RAG systems evolve from rigid pipelines into reconfigurable architectures, where each stage is represented as a module. These systems are flexible, scalable, and easier to debug or extend.

---
### Core Concepts of Modular RAG:

   1. Modules

       - Represent high-level stages like retrieval, summarization, generation, orchestration.

       - Can be replaced or extended independently.

   2. Sub-Modules

       - Functional units inside modules (e.g., reranking inside the retrieval module).

   3. Operators

       - Lowest-level functional units (e.g., cosine similarity, token eliminator, prompt formatter).

   4. Orchestration

       - A control unit that dynamically routes queries through different modules depending on context or task.

# Common Challenges


1. Retrieval Noise and Irrelevance

   - Retrieved chunks may contain:

       - Repeated information

       - Marginally relevant content

       - Contradictory or misleading data

   - Impact: Can confuse the generator or lead to hallucinated answers.

   - Solution: Reranking, metadata filters, and query rewriting.

2. Query Ambiguity and Under-Specification

   - User queries may be:

       - Too vague (“Tell me about the law”)

       - Using overloaded terms (e.g., “LLM” = Large Language Model or Master of Laws)

   - Impact: Poor retrieval due to mismatches.

   - Solution: Query rewriting, sub-query decomposition, classification modules.

3. Token and Context Limits

   - LLMs have a strict input token limit (e.g., 8k–100k tokens).

   - Long retrieved content must be:

       - Compressed

       - Summarized

       - Selected selectively

   - Impact: Truncated or low-quality input reduces answer quality.

4. Latency and Cost

   - RAG systems involve:

       - Document retrieval

       - Vector encoding

       - LLM inference

   - Impact: Increased response time and operational costs.

   - Solution: Caching, query classification (skip retrieval when not needed), smaller models.

5. Evaluation Complexity

   - Hard to measure performance consistently because:

       - Retrieval and generation quality are interdependent.

       - No universal benchmarks for all domains.

   - Solution: Combine automated and human-based evaluation (LLM-as-a-judge + manual review).

6. Domain-Specific Knowledge Integration

   - RAG struggles with:

       - Highly specialized vocabularies (e.g., legal citations, scientific formulas).

       - Tables, charts, and non-textual data.

   - Impact: Loss of critical context.

   - Solution: Use structured data (e.g., SQL + RAG), convert tables to text, or train with examples.

7. Security, Bias, and Misinformation

   - If the knowledge base is not curated:

       - RAG may surface outdated, biased, or even harmful content.

   - Impact: Erosion of user trust or factual correctness.

   - Solution: Source filtering, content audits, feedback loops.

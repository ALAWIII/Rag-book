# Metrics


Evaluation can be split into three levels:

---
1. Retrieval-Level Metrics

These measure how relevant the retrieved documents are to the query.

   - Recall@k: Measures if the correct document appears in the top-k results.

   - Precision@k: Measures the proportion of top-k results that are relevant.

   - Mean Reciprocal Rank (MRR): Focuses on the rank of the first relevant document.

   - Normalized Discounted Cumulative Gain (NDCG): Gives more credit for relevant documents appearing higher in the list.
---
2. Generation-Level Metrics

These assess the quality of the final output from the LLM, given the retrieved context.

   - BLEU / ROUGE / METEOR: Compare generated output with reference texts using n-gram overlap.

   - BERTScore: Uses embeddings instead of raw tokens to compare semantic similarity.

   - GPTScore / LLM-as-a-Judge: Use another LLM to assess answer quality (faithfulness, helpfulness, etc.).

---
3. End-to-End Metrics (Human-Centric)

Used to assess the system as a whole from the user’s perspective.

   - Faithfulness: Is the generated answer actually grounded in the retrieved docs?

   - Helpfulness: Does the response actually address the user's need?

   - Toxicity / Bias: Are responses free of harmful or offensive content?

   - Latency: Total time taken from query to response.

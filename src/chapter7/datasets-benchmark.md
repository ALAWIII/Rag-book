# Datasets and Benchmarks


Evaluation requires standardized datasets with known answers. Here are commonly used ones for RAG:

| Dataset / Benchmark | Task Type           | Domain       | Description                                      |
|----------------------|---------------------|--------------|--------------------------------------------------|
| Natural Questions (NQ)| Open-domain QA     | General      | Questions with long + short answers              |
| TriviaQA             | Open-domain QA      | Trivia       | Multi-sentence answers with evidence             |
| HotpotQA             | Multihop QA         | Wikipedia    | Requires combining facts from multiple docs      |
| FEVER                | Fact verification   | Wikipedia    | Verify claims with evidence                      |
| ELI5                 | Long-form QA        | Reddit       | Requires lengthy, detailed answers               |
| MS MARCO             | Passage retrieval   | Web          | Large-scale IR task; used to test retrievers     |
| BEIR Benchmark       | Retrieval (multi)   | Mixed        | Massive suite of 18+ retrieval datasets          |


Notable Tools:

   - BEIR Benchmark: Covers multiple retrieval tasks in diverse domains.

   - OpenAI Eval / LLM-as-a-Judge: Uses LLMs like GPT-4 to grade model responses.

   - LangChain + LlamaIndex: Useful for custom eval pipelines using RAG.


### Summary

   - Evaluating RAG = evaluating both retrieval and generation quality.

   - Use retrieval metrics (Recall@k, MRR) and generation metrics (ROUGE, BERTScore).

   - Use benchmarks like NQ, HotpotQA, and BEIR for testing.

   - For nuanced tasks, consider LLM-based evaluation as a modern alternative.

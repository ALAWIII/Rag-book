# Common Flow Patterns

Modular RAG systems are flexible enough to support multiple interaction patterns between modules. These allow more powerful and intelligent workflows.

---

### ✅ Common Flow Patterns:


| Flow | Pattern | Description |
|------|---------|-------------|
| Linear |	Classic RAG: query → retrieve → generate |
| Rewrite-Retrieve-Read |	Query is rewritten before retrieval |retrieval is optimized for better inputs |
| Demonstrate-Search-Predict (DSP) | Uses few-shot examples and routing | logic for tailored retrieval |
| Iterative Retrieve-Read | The model retrieves multiple rounds before | generation |
| Self-RAG | The model decides whether to retrieve or not at all
| Generate-Read | The LLM generates hypothetical answers, then retrieves | documents to support them |




---
### Advantages of Modular RAG

   - Flexibility: Modules can be customized for different use cases.

   - Adaptability: System can decide its own execution flow.

   - Maintainability: Easier to debug or improve specific modules.

   - Scalability: Handles more data sources, tasks, and formats.

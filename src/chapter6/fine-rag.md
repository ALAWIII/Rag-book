# Fine-tuning vs. RAG



Fine-tuning involves modifying the internal weights of an LLM by training it on new data. This process is computationally expensive but results in a more deeply adapted model.

---
🔍 Fine-tuning

   - Definition: Training the model on a new dataset to adjust its behavior permanently.

   - Types:

       - Supervised fine-tuning (SFT): Learn from labeled examples.

       - Instruction-tuning: Learn from instructions and demonstrations.

       - Reinforcement learning: Optimize output quality through feedback loops.

✅ Advantages:

   - Produces highly tailored behavior and tone.

   - No external retrieval needed.

   - Lower latency at inference time.

⚠️ Disadvantages:

   - Costly (compute + time).

   - Static: doesn't adapt to real-time data.

   - Hard to audit or update knowledge.

🔁 RAG

   - Definition: Uses an external retriever to supply relevant context before generation.

   - Behavior: Instead of “teaching” the model, RAG lets it “read” external documents live.

✅ Advantages:

   - Real-time adaptability.

   - Transparent (can show sources).

   - Cheaper and faster to update (no retraining).

⚠️ Disadvantages:

   - Slightly slower due to retrieval step.

   - Needs well-maintained document storage (corpus + vector DB).

   - More moving parts (retrievers, rerankers, etc.).

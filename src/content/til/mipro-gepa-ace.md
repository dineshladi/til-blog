---
title: "Understanding MIPRO, GEPA, and ACE: Three Optimization Approaches"
date: 2026-02-09
tags: ["optimization", "machine-learning", "algorithms", "llm", "prompt-engineering", "agents"]
---

Today I learned about three interesting optimization approaches for LLM agents: MIPRO, GEPA, and ACE. Each represents different strategies for improving language model performance through automated optimization.

---

## MIPRO (Multiprompt Instruction PRoposal Optimizer)

MIPRO is an automated prompt optimization framework developed at Stanford as part of the DSPy framework. It optimizes both prompt instructions and few-shot examples jointly using Bayesian Optimization.

### How It Works

MIPRO follows a systematic multi-step optimization process:

1. **Proposal Generation**: Generates diverse candidate prompts and demonstrations using the task model
2. **Bootstrapping**: Creates high-quality few-shot examples from the training data by running the program
3. **Bayesian Optimization**: Uses probabilistic modeling to find optimal combinations of instructions and examples
4. **Joint Optimization**: Simultaneously optimizes prompts across all modules in multi-stage LM programs
5. **Credit Assignment**: Addresses which prompt configuration is responsible for end-to-end performance

### Key Features

- **Multi-prompt Optimization**: Optimizes multiple prompts in a pipeline simultaneously
- **Instruction + Example Joint Search**: Finds best combinations of instructions and few-shot demonstrations
- **Bayesian Approach**: Uses efficient surrogate models to navigate the search space
- **Modular Design**: Works with any DSPy program or module

### Applications & Performance

- **Multi-stage LLM Pipelines**: Optimizes complex programs with multiple LLM calls
- **Few-shot Learning**: Excels when demonstrations improve performance
- **Systematic Engineering**: Replaces manual trial-and-error with principled optimization
- Outperforms hand-crafted prompts by up to 13% on diverse tasks

### Key Innovation

Unlike manual prompt engineering, MIPRO treats prompt optimization as a systematic engineering problem. The "credit assignment challenge" - determining which prompt in a pipeline is responsible for success or failure - is addressed through end-to-end optimization of the entire system.

### References

**Original Work**: [Stanford NLP Group - DSPy Framework](https://dspy.ai/)  
**Documentation**: [MIPROv2 Optimizer API](https://dspy.ai/api/optimizers/MIPROv2/)  
**Blog**: [MIPRO: The Optimizer That Brought Science to Prompt Engineering](https://www.comet.com/site/blog/mipro-optimization/)

---

## GEPA (Genetic-Pareto)

GEPA is a reflective prompt evolution method that uses natural language reflection to optimize prompts. It outperforms traditional reinforcement learning approaches by treating interpretable language as the primary learning signal rather than sparse scalar rewards.

### How It Works

GEPA operates through an evolutionary process with natural language reflection:

1. **Trajectory Sampling**: Generates system trajectories including reasoning steps, tool calls, and outputs
2. **Natural Language Reflection**: Analyzes failures and successes in natural language to diagnose problems
3. **Rule Learning**: Extracts high-level rules from trial-and-error experiences
4. **Prompt Updates**: Proposes and tests targeted improvements based on reflection insights
5. **Pareto Combination**: Combines complementary lessons from the Pareto frontier of attempts

### Key Features

- **Interpretable Learning**: Uses natural language as a rich learning medium instead of policy gradients
- **Reflection-Based**: Incorporates systematic analysis of what worked and what didn't
- **Few-Rollout Efficiency**: Achieves significant gains with minimal training examples
- **Rule Extraction**: Learns generalizable rules rather than just parameter updates

### Applications & Performance

According to the research:
- Outperforms GRPO (Group Relative Policy Optimization) by **10% on average** (up to 20% in some cases)
- Uses up to **35x fewer rollouts** than reinforcement learning methods
- Excels at complex reasoning tasks and code optimization
- HotpotQA benchmark: 42% → 62% accuracy with just 6,438 rollouts (GRPO needed 24,000 for 43%)

### Key Innovation

The fundamental insight is that the interpretable nature of language provides a much richer learning signal than sparse, scalar rewards. By leveraging natural language reflection, GEPA can extract nuanced understanding from just a few examples.

### References

**Paper**: [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457)  
**OpenReview**: [ICLR 2026 Conference Submission](https://openreview.net/forum?id=RQm2KQTM5r)  
**Authors**: Agrawal et al. (UC Berkeley, Stanford, Databricks, MIT)  
**Conference**: ICLR 2026  
**Blog**: [GEPA: A Reflective Approach](https://medium.com/data-science-in-your-pocket/gepa-a-reflective-approach-that-outperforms-reinforcement-learning-for-llms-0f101065a71b)

---

## ACE (Agentic Context Engineering)

ACE is a framework for adaptive context engineering that enables LLMs to self-improve by evolving their contexts over time. Unlike methods that optimize prompts, ACE focuses on maintaining and updating comprehensive domain knowledge in the context window.

### How It Works

ACE addresses the challenge of maintaining rich, evolving context for LLM applications:

1. **Structured Context Representation**: Maintains detailed knowledge in structured format rather than brief summaries
2. **Growth Phase**: Accumulates domain-specific insights, strategies, and examples from interactions
3. **Refinement Phase**: Condenses and organizes accumulated knowledge without losing critical details
4. **Iterative Improvement**: Continuously updates context based on feedback and performance
5. **Anti-Collapse Mechanisms**: Prevents "context collapse" where iterative rewriting erodes important details

### Key Features

- **Comprehensive Context**: Preserves detailed domain knowledge rather than short summaries
- **Self-Improving**: Context evolves and improves through agent interactions
- **No Fine-Tuning Required**: Improves performance without weight updates
- **Memory-Like**: Acts as a growing playbook that agents can reference

### Applications & Performance

ACE is designed for LLM applications that rely on context adaptation:
- **Agent Systems**: Building self-improving agents with growing knowledge bases
- **Domain-Specific Reasoning**: Maintaining detailed expertise in specialized areas
- **Long-Term Interactions**: Systems that learn and improve over extended use
- Outperforms prompt-based methods by preserving comprehensive context

### Key Innovation

ACE solves two critical problems in context engineering:
1. **Brevity Bias**: Prior methods discard domain-specific insights for short summaries
2. **Context Collapse**: Iterative rewriting gradually erodes details over time

By structuring context as a living playbook that adapts with feedback, ACE enables true self-improvement without forgetting.

### References

**Paper**: [Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models](https://arxiv.org/abs/2510.04618)  
**OpenReview**: [ICLR 2026 Conference](https://openreview.net/forum?id=eC4ygDs02R)  
**GitHub**: [ACE Agent Framework](https://github.com/ace-agent/ace)  
**Authors**: Zhang et al. (Stanford, Berkeley)  
**Blog**: [Medium Article on ACE](https://medium.com/data-and-beyond/agentic-context-engineering-a-framework-for-llms-that-learn-without-forgetting-paper-review-0dc73643ef00)

---

## Comparison

| Method | Focus | How It Works | Key Strength | Best For |
|--------|-------|--------------|--------------|----------|
| **MIPRO** | Prompt Optimization | Bayesian Optimization + Bootstrapping | Joint optimization of instructions + examples | Multi-stage pipelines with few-shot learning |
| **GEPA** | Prompt Evolution | Reflection + Evolution + Pareto | Natural language learning with few rollouts | Complex reasoning, limited evaluation budget |
| **ACE** | Context Engineering | Structured context growth & refinement | Comprehensive knowledge preservation | Self-improving agents, long-term learning |

## Key Differences

**MIPRO vs GEPA vs ACE:**

- **MIPRO**: Optimizes *what to say* (prompts) using Bayesian search
- **GEPA**: Evolves *how to say it* (instructions) through reflection
- **ACE**: Manages *what to know* (context) as a growing knowledge base

**When to use which:**

**Choose MIPRO when:**
- Building multi-stage LLM pipelines with DSPy
- Need systematic prompt optimization with few-shot examples
- Want principled Bayesian approach to prompt search
- Optimizing across multiple modules in a pipeline

**Choose GEPA when:**
- You want interpretable prompt improvements via reflection
- Working with limited evaluation budget (few rollouts)
- Need better performance than RL-based methods like GRPO
- Want to extract generalizable rules from examples

**Choose ACE when:**
- Building agents that need to learn and remember over time
- Domain expertise must be preserved comprehensively
- Context window is your primary knowledge storage
- You need self-improving systems without fine-tuning

---

These three methods represent complementary approaches to LLM optimization: MIPRO optimizes prompts systematically, GEPA evolves them through reflection, and ACE manages the knowledge context itself. Together, they offer a comprehensive toolkit for building better language model applications.

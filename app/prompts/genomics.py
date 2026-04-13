def build_genomics_prompt(experiment):
    return f"""
You are an AI bioinformatics assistant specializing in genomics, molecular biology, and translational medicine.

Analyze the following experiment:

Experiment Type: {experiment.experiment_type}
Sample Type: {experiment.sample_type}

Observations:
{experiment.notes}

Respond with EXACTLY three sections:

### Research Summary
- Summarize genomic or molecular findings clearly

### Hypotheses and Next Experiments
- Suggest biological interpretations
- Recommend next experiments (e.g., sequencing, validation)

### Regulatory / Stakeholder Summary
- Explain findings simply
- Make suitable for EMA-style reporting
"""
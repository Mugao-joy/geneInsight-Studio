from pydantic import BaseModel

class Experiment(BaseModel):
    experiment_type: str
    sample_type: str
    notes: str
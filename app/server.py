import os
from fastapi import FastAPI, Depends
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from app.models import Experiment
from app.prompts.genomics import build_genomics_prompt
from dotenv import load_dotenv
load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
@app.post("/api/analyze")
def analyze_experiment(experiment: Experiment):

    prompt = [
        {"role": "system", "content": "You are a genomics expert AI."},
        {"role": "user", "content": build_genomics_prompt(experiment)}
    ]

    stream = client.chat.completions.create(
        model="gpt-4",
        messages=prompt,
        stream=True
    )

    def event_stream():
        for chunk in stream:
            text = chunk.choices[0].delta.content
            if text:
                yield f"data: {text}\n\n"

    return StreamingResponse(event_stream(), media_type="text/event-stream")


@app.get("/health")
def health():
    return {"status": "ok"}
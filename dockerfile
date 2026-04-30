# Stage 1: Build frontend
FROM node:18 AS frontend

WORKDIR /app/frontend
COPY geneinsight-frontend/package*.json ./
RUN npm install

COPY geneinsight-frontend .
RUN npm run build

# Stage 2: Backend
FROM python:3.11

WORKDIR /app

# Install backend deps
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend
COPY app ./app

# Copy built frontend
COPY --from=frontend /app/frontend/.next ./frontend/.next
COPY --from=frontend /app/frontend/public ./frontend/public

EXPOSE 8000

CMD ["sh", "-c", "uvicorn app.server:app --host 0.0.0.0 --port ${PORT:-8080}"]
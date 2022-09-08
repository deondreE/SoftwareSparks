FROM rust:latest

WORKDIR /src
COPY . .

RUN cargo install --path .
RUN cargo build 

CMD ["cargo", "run"]
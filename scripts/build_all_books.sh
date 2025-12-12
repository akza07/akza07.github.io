#!/bin/bash

BOOK_DIR="mdbooks"

for book in "$BOOK_DIR"/*; do
  if [ -d "$book" ]; then
    name=$(basename $book)
    echo "Building book: $name"
    sh scripts/build_book.sh $name
  fi
done

# Linked Lists

A _linked list_ is a data structure that is most close to a list in modern programming languages.
Say `Array()` in JavaScript or `list[any]` in Python. At a hindsight, it seems and behaves like an
an actual array. Except unlike in languages like C, the memory is not a continuous allocation but
more flexible and can hold different types of data.

There are 2 types of _Linked Lists_ that are most common and they are listed below
- [Singly Linked List](#singly-linked-list)
- [Doubly Linked List](#doubly-linked-list)

## Singly Linked List

```python
class LinkedList:
    def __init__(self, data):
        self.data = data
        self.next = None

    def add(self, data):
      self.next = LinkedList(data)

```

## Doubly Linked List

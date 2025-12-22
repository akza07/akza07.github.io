class Node:
    def __init__(self, data):
        self.next = None
        self.data = data

    def __str__(self):
        return f"Node(data={self.data})"


class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def add(self, value):
        self.size += 1
        node = Node(value)
        node.next = self.head
        self.head = node

    def find(self, value) -> (Node[any], int):
        node = self.head
        iterations = 0
        while node is not None:
            if node.data == value:
                return node, iterations
            node = node.next
            iterations += 1
        return None, iterations

    def __str__(self):
        return f"{self.head}"

    def remove(self):
        self.size -= 1
        self.head = self.head.next


link_list = LinkedList()
for val in range(1, 10):
    link_list.add(val)

print(link_list)
link_list.remove()
print(link_list)

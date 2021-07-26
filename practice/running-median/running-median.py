#!/usr/bin/python

import sys
import heapq

n = int(sys.stdin.readline())

median = None;
count = 0

class MedianHeap:
  median
  lowerHalf = []
  upperHalf = []

  def __init__(self):
    heapq.heapify(lowerHalf)
    heapq.heapify(upperHalf)

  def insert(self, k):
    count += 1
    # doesnt matter, both are empty
    if median == None:
      heapq.heappush(upperHalf, k)
      median = k
      return

    if k < median:
      heapq.heappush(lowerHalf, k)



for i in range(n):
  k = int(sys.stdin.readline().strip())

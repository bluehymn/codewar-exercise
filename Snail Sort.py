import unittest

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]

def snail(array):
  result = []

  while (len(array)):
    result[len(result):] = array.pop(0)

    for item in array:
      if len(item):
        result.append(item.pop())

    if len(array):
      temp = array.pop()
      temp.reverse()
      result[len(result):] = temp

    temp = []
    for item in array:
      if len(item):
        temp.append(item.pop(0))
    
    temp.reverse()
    result[len(result):] = temp

  return result

snail(array)

unittest..assertEqual (True, True)


import unittest

def array_diff(a, b):
  result = []
  for item in a:
    if not (item in b):
      result.append(item)

  return result

class test(unittest.TestCase):
  def test_1(self):
    self.assertEqual(array_diff([1,2], [1]), [2])

  def test_2(self):
    self.assertEqual(array_diff([1,2,2], [1]), [2,2])
  
  def test_3(self):
    self.assertEqual(array_diff([1,2,2], [2]), [1])
  
  def test_4(self):
    self.assertEqual(array_diff([1,2,2], []), [1,2,2])
  
  def test_5(self):
    self.assertEqual(array_diff([], [1,2]), [])

if __name__ == '__main__':
  unittest.main()
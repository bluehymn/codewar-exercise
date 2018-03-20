def digital_root( n ):
    s = str(n)
    ret = 0
    i = len(s) - 1
    while i >= 0 :
      ret += int(s[i])
      i = i - 1
    return ret

print(digital_root(15))
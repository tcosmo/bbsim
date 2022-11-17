const presetMachines = {'powers_of_two_15_2.txt':'OyBUaGlzIG1hY2hpbmUgaGFsdHMgaWYgYW5kIG9ubHkgaWYgRXJkxZFzJyBjb25qZWN0dXJlIG9uIHBvd2VycyBvZiB0d28gaXMgZmFsc2U6CjsKOyAiRm9yIGFsbCBuID4gOCwgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIDIgaW4gdGhlIHRlcm5hcnkgcmVwcmVzZW50YXRpb24gb2YgMl5uIgo7CjsgUC4gRXJkxZFzLiBTb21lIHVuY29udmVudGlvbmFsIHByb2JsZW1zIGluIG51bWJlciB0aGVvcnkuIE1hdGhlbWF0aWNzIE1hZ2F6aW5lLCA1MigyKTo2N+KAkzcwLCAxOTc5Lgo7CjsgVGhlIG1hY2hpbmUgaGFzIDE1IHN0YXRlcyBhbmQgMiBzeW1ib2xzLgo7IFRoZSBtYWNoaW5lIHNpbXVsYXRlcyAncG93ZXJzX29mX3R3b181XzQudHh0JyB3aXRoIHRoZSBmb2xsb3dpbmcgZW5jb2RpbmcgdGFibGU6CjsKOyAwOiBiYSwgMTogYWIsIDI6IGFhLCAjOiBiYgo7CjsgVGhpcyBtYWNoaW5lIHdhcyBwcm92ZW4gY29ycmVjdDogCgppbml0aWFsX3N0YXRlOiBtdWwyX0dfc2ltCnJlZHVuZGFuY3k6IDIKYmxhbmtfc3ltYm9sOiBiCgptdWwyX0Zfc2ltCmEgYSBSIG11bDJfRl9hCmIgYiBSIG11bDJfRl9iCgptdWwyX0ZfYQphIGIgUiBtdWwyX0dfc2ltCmIgYSBSIG11bDJfRl9zaW0KCm11bDJfRl9iCmEgYSBSIG11bDJfRl9zaW0KYiBiIEwgZmluZF8yX2EKCmZpbmRfMl9zaW0KYSBhIEwgZmluZF8yX2EKYiBiIEwgZmluZF8yX2IKCmZpbmRfMl9hCmEgYSBMIHJld2luZF9zaW0KYiBiIEwgZmluZF8yX3NpbQoKZmluZF8yX2IKYSBhIEwgZmluZF8yX3NpbQpiIGIgTCBjaGVja19oYWx0X3NpbQoKbXVsMl9HX3NpbQphIGEgUiBtdWwyX0dfYQpiIGEgUiBtdWwyX0dfYgoKbXVsMl9HX2EKYSBhIFIgbXVsMl9HX3NpbQpiIGEgTCBtdWwyX0dfZXh0cmEKCm11bDJfR19iCmEgYiBSIG11bDJfRl9zaW0KYiBiIFIgbXVsMl9GX3NpbQoKbXVsMl9HX2V4dHJhCmEgYiBSIG11bDJfR19hCmIgYiBSIHJld2luZF9iCgpyZXdpbmRfc2ltCmEgYSBMIHJld2luZF9hCmIgYiBMIHJld2luZF9iCgpyZXdpbmRfYQphIGEgTCByZXdpbmRfc2ltCmIgYiBMIHJld2luZF9zaW0KCnJld2luZF9iCmEgYSBMIHJld2luZF9zaW0KYiBiIFIgbXVsMl9HX2IKCmNoZWNrX2hhbHRfc2ltCmEgYiBMIGNoZWNrX2hhbHRfYQpiIGEgUiByZXdpbmRfYgoKY2hlY2tfaGFsdF9hCmEgSEFMVApiIGEgUiBtdWwyX0dfZXh0cmEKCg==',
'BB_5_complex_counter.txt':'OyBUaGlzIG1hY2hpbmUgaXMgcmVmZXJyZWQgYXMgImNvbXBsZXggY291bnRlciIgaW4gdGhlICJBdHRhY2tpbmcgQkIoNSkiIHBhcGVyIGJ5IE1hcnhlbiBhbmQgQnVudHJvY2sKOyBUaGlzIG1hY2hpbmUgZG9lcyBub3QgaGFsdCwgaXQgaXMgbWFya2VkID8gaW4gdGhlIHBhcGVyIGJ1dCB0aGUgYmVoYXZpb3IgY2FuIGJlIGV4cGxhaW5lZCBxdWl0ZSBzaW1wbHkKOyBUaGUgbWFjaGluZSBtb3ZlcyAwcyBsaWtlIGJ1YmJsZXMgaW4gbG9uZyBydW5zIG9mIDFzIHdoaWNoIGl0IGZpcnN0IHNwbGl0cyB0aGF0IHdheTogMTExMTExMTEgLT4gMTEwMTEwMTEwMTEKOyBUaGlzIGJlaGF2aW9yIGlzIHJlY3Vyc2l2ZS4KCmJsYW5rX3N5bWJvbDogMAoKQQowIDEgTCBCCjEgMSBSIEEKCkIKMCAwIFIgQQoxIDAgTCBDCgpDCjAgMCBSIEMKMSAxIEwgRAoKRAowIDEgTCBFCjEgMCBSIEEKCkUKMCAwIEwgQgoxIEhhbHQKCg==',
'busy_beaver_winner_3_2.txt':'OyAzLDIgYnVzeSBiZWF2ZXIgd2lubmVyCjsgSXQgaGFsdHMgYWZ0ZXIgMjEgc3RlcHMuCjsgMVJCIDFSSCAxTEIgMFJDIDFMQyAxTEEJCjsgTW9yZSBpbmZvOiBodHRwczovL3dlYnVzZXJzLmltai1wcmcuZnIvfnBhc2NhbC5taWNoZWwvaGEuaHRtbCN0bTMyCgppbml0aWFsX3N0YXRlOiBBCmJsYW5rX3N5bWJvbDogMAoKQSAKMCAxIFIgQiAKMSBIQUxUIAoKQiAKMCAxIEwgQiAKMSAwIFIgQyAKCkMgCjAgMSBMIEMgCjEgMSBMIEEg',
'busy_beaver_winner_4_2.txt':'OyA0LDIgYnVzeSBiZWF2ZXIgd2lubmVyCjsgSXQgaGFsdHMgYWZ0ZXIgMTA3IHN0ZXBzLgo7IDFSQiAxTEIgMUxBIDBMQyAxUkggMUxEIDFSRCAwUkEKOyBNb3JlIGluZm86IGh0dHBzOi8vd2VidXNlcnMuaW1qLXByZy5mci9+cGFzY2FsLm1pY2hlbC9oYS5odG1sI3RtNDIKCmluaXRpYWxfc3RhdGU6IEEKYmxhbmtfc3ltYm9sOiAwCgpBIAowIDEgUiBCIAoxIDEgTCBCIAoKQiAKMCAxIEwgQSAKMSAwIEwgQyAKCkMgCjAgSGFsdCAKMSAxIEwgRCAKCkQgCjAgMSBSIEQgCjEgMCBSIEE=',
'busy_beaver_winner_2_2.txt':'OyAyLDIgYnVzeSBiZWF2ZXIgd2lubmVyCjsgSXQgaGFsdHMgYWZ0ZXIgNiBzdGVwcy4KOyAxUkIgMUxCIDFMQSAxUkgKOyBNb3JlIGluZm86IGh0dHBzOi8vd2VidXNlcnMuaW1qLXByZy5mci9+cGFzY2FsLm1pY2hlbC9oYS5odG1sI3RtMjIKCmluaXRpYWxfc3RhdGU6IEEKYmxhbmtfc3ltYm9sOiAwCgpBIAowIDEgUiBCIAoxIDEgTCBCCgpCIAowIDEgTCBBIAoxIEhBTFQg',
'busy_beaver_winner_2_3.txt':'OyAyLDMgYnVzeSBiZWF2ZXIgd2lubmVyCjsgSXQgaGFsdHMgYWZ0ZXIgMzggc3RlcHMuCjsgMVJCIDJMQiAxUkggMkxBIDJSQiAxTEIKOyBNb3JlIGluZm86IGh0dHBzOi8vd2VidXNlcnMuaW1qLXByZy5mci9+cGFzY2FsLm1pY2hlbC9oYS5odG1sI3RtMjMKCmluaXRpYWxfc3RhdGU6IEEKYmxhbmtfc3ltYm9sOiAwCgpBIAowIDEgUiBCIAoxIDIgTCBCCjIgSEFMVAoKQiAKMCAyIEwgQSAKMSAyIFIgQiAKMiAxIEwgQiA=',
'powers_of_two_5_4.txt':'OyBUaGlzIG1hY2hpbmUgaGFsdHMgaWYgYW5kIG9ubHkgaWYgRXJkxZFzJyBjb25qZWN0dXJlIG9uIHBvd2VycyBvZiB0d28gaXMgZmFsc2U6CjsKOyAiRm9yIGFsbCBuID4gOCwgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIDIgaW4gdGhlIHRlcm5hcnkgcmVwcmVzZW50YXRpb24gb2YgMl5uIgo7CjsgUC4gRXJkxZFzLiBTb21lIHVuY29udmVudGlvbmFsIHByb2JsZW1zIGluIG51bWJlciB0aGVvcnkuIE1hdGhlbWF0aWNzIE1hZ2F6aW5lLCA1MigyKTo2N+KAkzcwLCAxOTc5Lgo7CjsgVGhlIG1hY2hpbmUgaGFzIDUgc3RhdGVzIGFuZCA0IHN5bWJvbHMKOyBTdGF0ZXMgbXVsMl9GIGFuZCBtdWwyX0cgcnVuIHRoZSBGU1QgdGhhdCBjb21wdXRlcyAyeCBpbiBiYXNlIDMgKHJldmVyc2UtdGVybmFyeSkuIAo7IFRoZSBvdGhlciBzdGF0ZXMgYXJlIHJlc3BvbnNpYmxlIGZvciBjaGVja2luZyB0aGUgY29uamVjdHVyZSBhbmQga2VlcGluZyB0cmFjayBvZiB0aGUgMyBrbm93biBzcGVjaWFsIGNhc2VzOgo7IDEsIDQgYW5kIDI1NiB3aGljaCBhcmUgcmVzZXBlY3RpdmVseSAxLCAxMSBhbmQgMTAwMTExIGluIGJhc2UgMy4KOwo7IFRoaXMgbWFjaGluZSB3YXMgcHJvdmVuIGNvcnJlY3Q6IAoKaW5pdGlhbF9zdGF0ZTogbXVsMl9HCnJlZHVuZGFuY3k6IDEKCm11bDJfRgowIDAgUiBtdWwyX0YKMSAyIFIgbXVsMl9GCjIgMSBSIG11bDJfRwojICMgTCBmaW5kXzIKCm11bDJfRwowIDEgUiBtdWwyX0YKMSAwIFIgbXVsMl9HCjIgMiBSIG11bDJfRwojIDEgUiBtdWwyX0YKCmZpbmRfMgowIDAgTCBmaW5kXzIKMSAxIEwgZmluZF8yCjIgMiBMIHJld2luZCAgICAgIDsgd2UgZm91bmQgYSAyCiMgIyBMIGNoZWNrX2hhbHQgIDsgbm8gMiBoYXMgYmVlbiBmb3VuZAoKcmV3aW5kCjAgMCBMIHJld2luZAoxIDEgTCByZXdpbmQgCjIgMiBMIHJld2luZAojICMgUiBtdWwyX0YgICAgICA7IHdlIGRvIHRoZSBuZXh0IHBvd2VyIG9mIDIKCmNoZWNrX2hhbHQKOyBUaGVyZSBhcmUgMyBrbm93biBjb3VudGVyIGV4YW1wbGVzOgo7IGJhc2UgMzogIDEsIDExLCAxMDAxMTEKOyBiYXNlIDEwOiAxLCA0LCAyNTYKMCAxIFIgcmV3aW5kCjEgMiBSIHJld2luZAoyIEhBTFQgICAgICAgICAgICA7IFdlIGhhdmUgZm91bmQgYSBuZXcgY291bnRlciBleGFtcGxlCiMgMCBSIHJld2luZCAKCg==',
'Collatz_machine_3_4.txt':'OyBUaGlzIG1hY2hpbmUgY29tcHV0ZXMgaW5maW5pdGUgYW1vdW50IG9mIENvbGxhdHogaXRlcmF0aW9ucyBpbiBiYXNlIDMgKHJldmVyc2UgdGVybmFyeSkgb24gYW55IHRlcm5hcnkgaW5wdXQuCjsgVGhlIG1hY2hpbmUgd2FzIGZvdW5kIGJ5IFAgTWljaGVsCjsgaHR0cHM6Ly9hcnhpdi5vcmcvcGRmLzE0MDkuNzMyMi5wZGYKCmluaXRpYWxfc3RhdGU6IEEKcmVkdW5kYW5jeTogMQoKQQowIDAgUiBBCjEgMCBSIEIgCjIgMSBSIEEgCiMgIyBMIHJld2luZAoKQgowIDEgUiBCCjEgMiBSIEEgCjIgMiBSIEIgCiMgMiBMIHJld2luZAoKcmV3aW5kCjAgMCBMIHJld2luZAoxIDEgTCByZXdpbmQKMiAyIEwgcmV3aW5kCiMgIyBSIEEgCgo=',
'weak_Collatz_conjecture_124_2.txt':'OyBUaGlzIG1hY2hpbmUgaGFsdHMgaWYgYW5kIG9ubHkgaWYgdGhlIHdlYWsgQ29sbGF0eiBjb25qZWN0dXJlIGlzIGZhbHNlCjsgVGhlIGNvbmplY3R1cmUgc3RhdGVzIHRoYXQgdGhlIG9ubHkgY3ljbGVzIG9uIHRoZSBuYXR1cmFsIG51bWJlcnMgYXJlIDAsMCwgYW5kIDEsMiwxLDIuLgo7IFRoaXMgbWFjaGluZSBoYXMgMTI0IHN0YXRlcyBhbmQgMiBzeW1ib2xzCjsKOyBUaGlzIG1hY2hpbmUgd2FzIGZvdW5kIGJlZm9yZSB0aGUgNDQgNCBtYWNoaW5lLgo7CjsgV2UgYmVsaWV2ZSB0aGF0IHRyYW5zbGF0aW5nIHRoZSA0NCA0IG1hY2hpbmUgdG8gMiBzeW1ib2xzCjsgd291bGQgeWllbGQgYSBiZXR0ZXIgbWFjaGluZSB0aGFuIHRoaXMgb25lLgo7CjsgVGhpcyBtYWNoaW5lIHdhcyBub3QgcHJvdmVuIGNvcnJlY3QgeWV0LgoKCmJsYW5rX3N5bWJvbDogMApyZWR1bmRhbmN5OiAyCgp3cml0ZUEgOyBXcml0ZSBtYWdpYyB3b3JkIDEwIDAxIDE+MSAxMSB0byBzdGFydCB0aGluZ3MgdXAKICAgIDAgMSBSIHdyaXRlQgogICAgLQp3cml0ZUIKICAgIDAgMCBSIHdyaXRlQwogICAgLQp3cml0ZUMKICAgIDAgMCBSIHdyaXRlRAogICAgLQp3cml0ZUQKICAgIDAgMSBSIHdyaXRlRQogICAgLQp3cml0ZUUKICAgIDAgMSBSIHdyaXRlRgogICAgLQp3cml0ZUYKICAgIDAgMSBSIHdyaXRlRwogICAgLQp3cml0ZUcKICAgIDAgMSBSIHdyaXRlSAogICAgLQp3cml0ZUgKICAgIDAgMSBMIHdyaXRlSQogICAgLQp3cml0ZUkKICAgIC0KICAgIDEgMSBMIGN6X3N0YXJ0X2JvdW5jaW5nIAoKOyBjeiBzdGFuZHMgZm9yIGNvdW50ZXIgem9uZQpjel9zdGFydF9ib3VuY2luZwogICAgMCAwIEwgYm91bmNlX2NoZWNrX3NlY29uZF9iaXRfYW5kX21vZGlmeQogICAgMSAxIEwgYm91bmNlX2NoZWNrX3NlY29uZF9iaXRfYW5kX21vZGlmeQoKYm91bmNlX2NoZWNrX3NlY29uZF9iaXRfYW5kX21vZGlmeQogICAgMCAxIEwgYm91bmNlX2hvbGRfMF9yZWFkX2ZpcnN0X2JpdAogICAgMSAwIEwgYm91bmNlX2hvbGRfMV9yZWFkX2ZpcnN0X2JpdAoKOyBIb2xkaW5nIGEgMAogICAgYm91bmNlX2hvbGRfMF9jaGVja19zZWNvbmRfYml0XzAKICAgICAgICAwIDAgTCBib3VuY2VfaG9sZF8wX3JlYWRfZmlyc3RfYml0CjsgYWxzbyBjb3BpZXMgYSB6ZXJvCiAgICAgICAgMSAwIEwgZXhwYW5kIAoKICAgIGJvdW5jZV9ob2xkXzBfY2hlY2tfc2Vjb25kX2JpdF8xCiAgICAgICAgMCAwIEwgYm91bmNlX2hvbGRfMF9yZWFkX2ZpcnN0X2JpdAogICAgICAgIDEgMSBMIGJvdW5jZV9ob2xkXzBfcmVhZF9maXJzdF9iaXQKCiAgICBib3VuY2VfaG9sZF8wX3JlYWRfZmlyc3RfYml0CiAgICAgICAgMCAwIEwgYm91bmNlX2hvbGRfMF9jaGVja19zZWNvbmRfYml0XzAKICAgICAgICAxIDEgTCBib3VuY2VfaG9sZF8wX2NoZWNrX3NlY29uZF9iaXRfMQoKOyBIb2xkaW5nIGEgMQogICAgYm91bmNlX2hvbGRfMV9yZWFkX2ZpcnN0X2JpdAogICAgICAgIDAgMCBMIGJvdW5jZV9ob2xkXzFfY2hlY2tfc2Vjb25kX2JpdF8wCiAgICAgICAgMSAxIEwgYm91bmNlX2hvbGRfMV9jaGVja19zZWNvbmRfYml0XzEKCiAgICBib3VuY2VfaG9sZF8xX3Jld3JpdGVfYml0XzEKICAgICAgICAwIDEgTCBib3VuY2VfaG9sZF8xX3Jld3JpdGVfYml0XzFfaWdub3JlCiAgICAgICAgLQogICAgCiAgICBib3VuY2VfaG9sZF8xX3Jld3JpdGVfYml0XzFfaWdub3JlCiAgICAgICAgMCAwIEwgZXhwYW5kCiAgICAgICAgMSAxIEwgZXhwYW5kCgogICAgYm91bmNlX2hvbGRfMV9jaGVja19zZWNvbmRfYml0XzAKICAgICAgICAwIDAgTCBib3VuY2VfaG9sZF8xX3JlYWRfZmlyc3RfYml0CiAgICAgICAgMSAxIFIgYm91bmNlX2hvbGRfMV9yZXdyaXRlX2JpdF8xCgogICAgYm91bmNlX2hvbGRfMV9jaGVja19zZWNvbmRfYml0XzEKICAgICAgICAwIDAgTCBib3VuY2VfaG9sZF8xX3JlYWRfZmlyc3RfYml0CiAgICAgICAgMSAxIEwgYm91bmNlX2hvbGRfMV9yZWFkX2ZpcnN0X2JpdCAgICAKCmV4cGFuZAogICAgMCAwIEwgZXhwYW5kX2JpcwogICAgMSAwIEwgZXhwYW5kX2JpcwoKZXhwYW5kX2JpcwogICAgMCAxIFIgcmV3aW5kX2lnbm9yZQogICAgMSAxIFIgcmV3aW5kX2lnbm9yZQoKcmV3aW5kX2lnbm9yZQogICAgMCAwIFIgcmV3aW5kCiAgICAxIDEgUiByZXdpbmQKCnJld2luZF9jaGVja19iaXRfMAogICAgMCAwIFIgcmV3aW5kCiAgICAxIDEgUiBib3VuY2VfYmFjawoKcmV3aW5kX2NoZWNrX2JpdF8xCiAgICAwIDAgUiBib3VuY2VfYmFja19Db2xsYXR6CiAgICAxIDEgUiByZXdpbmQKCnJld2luZAogICAgMCAwIFIgcmV3aW5kX2NoZWNrX2JpdF8wCiAgICAxIDEgUiByZXdpbmRfY2hlY2tfYml0XzEKCmJvdW5jZV9iYWNrX2NoZWNrX3NlY29uZF9iaXRfMAogICAgMCAwIFIgYm91bmNlX2JhY2sKICAgIDEgMSBMIGJvdW5jZV9iYWNrX2NoZWNrX2NvcHlfaWdub3JlCgpib3VuY2VfYmFja19jaGVja19zZWNvbmRfYml0XzEKICAgIDAgMCBMIGJvdW5jZV9iYWNrX2NoZWNrX2NvcHlfaWdub3JlCiAgICAxIDEgUiBib3VuY2VfYmFjawoKYm91bmNlX2JhY2sKICAgIDAgMCBSIGJvdW5jZV9iYWNrX2NoZWNrX3NlY29uZF9iaXRfMAogICAgMSAxIFIgYm91bmNlX2JhY2tfY2hlY2tfc2Vjb25kX2JpdF8xCgo7IGNvdWxkIGJlIGFsc28gdXNlZCB0byB3cml0ZSBiYWNrIHRoZSBiaXQKYm91bmNlX2JhY2tfY2hlY2tfY29weV9pZ25vcmUKICAgIDAgMCBMIGJvdW5jZV9iYWNrX2NoZWNrX2NvcHkKICAgIDEgMSBMIGJvdW5jZV9iYWNrX2NoZWNrX2NvcHkKCmJvdW5jZV9iYWNrX2NoZWNrX2NvcHkKICAgIDAgMCBMIGJvdW5jZV9iYWNrX2NoZWNrX2NvcHlfYml0XzAKICAgIDEgMSBMIGJvdW5jZV9iYWNrX2NoZWNrX2NvcHlfYml0XzEKCmJvdW5jZV9iYWNrX2NoZWNrX2NvcHlfYml0XzAKICAgIDAgMCBSIGN6X3N0YXJ0X2JvdW5jaW5nCiAgICAtCgpib3VuY2VfYmFja19jaGVja19jb3B5X2JpdF8xCiAgICAwIDEgUiBib3VuY2VfYmFja19Db2xsYXR6X2lnbm9yZQogICAgMSAxIFIgY3pfc3RhcnRfYm91bmNpbmcKCmJvdW5jZV9iYWNrX0NvbGxhdHpfaWdub3JlCiAgICAtCiAgICAxIDAgUiBib3VuY2VfYmFja19Db2xsYXR6Cgpib3VuY2VfYmFja19Db2xsYXR6CiAgICAwIDAgUiBib3VuY2VfYmFja19Db2xsYXR6X2NoZWNrX3NlY29uZF9iaXRfMAogICAgMSAxIFIgYm91bmNlX2JhY2tfQ29sbGF0el9jaGVja19zZWNvbmRfYml0XzEKCmJvdW5jZV9iYWNrX0NvbGxhdHpfY2hlY2tfc2Vjb25kX2JpdF8wCiAgICAwIDAgUiBib3VuY2VfYmFja19Db2xsYXR6CiAgICAxIDAgUiBjaGVja19pZl9vbmVfbW9yZV9pdGVyYXRpb24KCmJvdW5jZV9iYWNrX0NvbGxhdHpfY2hlY2tfc2Vjb25kX2JpdF8xCiAgICAwIDEgUiBjaGVja19pZl9vbmVfbW9yZV9pdGVyYXRpb24KICAgIDEgMSBSIGJvdW5jZV9iYWNrX0NvbGxhdHoKCmNoZWNrX2lmX29uZV9tb3JlX2l0ZXJhdGlvbgogICAgMCAwIEwgd2FpdF9mb3JfQ29sbGF0egogICAgMSAxIFIgY2hlY2tfaWZfb25lX21vcmVfaXRlcmF0aW9uX2JpcwoKY2hlY2tfaWZfb25lX21vcmVfaXRlcmF0aW9uX2JpcwogICAgMCAwIEwgd2FpdF9mb3JfQ29sbGF0el9pZ25vcmUKICAgIDEgMSBMIHN0YXJ0X2NvbXBhcmluZ19maXJzdF9zdGVwCgp3YWl0X2Zvcl9Db2xsYXR6X2lnbm9yZQogICAgMCAwIEwgd2FpdF9mb3JfQ29sbGF0egogICAgMSAxIEwgd2FpdF9mb3JfQ29sbGF0egoKd2FpdF9mb3JfQ29sbGF0egogICAgMCAwIEwgd2FpdF9mb3JfQ29sbGF0el9jaGVja19zZWNvbmRfYml0XzAKICAgIDEgMSBMIHdhaXRfZm9yX0NvbGxhdHpfaWdub3JlCgp3YWl0X2Zvcl9Db2xsYXR6X2NoZWNrX3NlY29uZF9iaXRfMAogICAgMCAwIEwgd2FpdF9mb3JfQ29sbGF0egogICAgMSAxIEwgQ29sbGF0el9zdGFydF9pZ25vcmVfdHJhaWxpbmdfemVyb3MKCkNvbGxhdHpfc3RhcnRfaWdub3JlX3RyYWlsaW5nX3plcm9zCiAgICAwIDAgTCBDb2xsYXR6X3N0YXJ0X2lnbm9yZV90cmFpbGluZ196ZXJvcwogICAgMSAwIEwgQ29sbGF0el9zdGF0ZV8wX2NhcnJ5XzFfcmVhZF8xCgpDb2xsYXR6X3N0YXRlXzBfY2FycnlfMAogICAgMCAwIEwgQ29sbGF0el9zdGF0ZV8wX2NhcnJ5XzBfcmVhZF8wCiAgICAxIDEgTCBDb2xsYXR6X3N0YXRlXzBfY2FycnlfMF9yZWFkXzEKCkNvbGxhdHpfc3RhdGVfMF9jYXJyeV8wX3JlYWRfMAogICAgMCAwIEwgQ29sbGF0el9zdGF0ZV8wX2NhcnJ5XzAKICAgIDEgMSBSIHJld2luZF9pZ25vcmUKCkNvbGxhdHpfc3RhdGVfMF9jYXJyeV8wX3JlYWRfMQogICAgLQogICAgMSAxIEwgQ29sbGF0el9zdGF0ZV8xX2NhcnJ5XzAKCkNvbGxhdHpfc3RhdGVfMF9jYXJyeV8xCiAgICAwIDEgTCBDb2xsYXR6X3N0YXRlXzBfY2FycnlfMV9yZWFkXzAKICAgIDEgMCBMIENvbGxhdHpfc3RhdGVfMF9jYXJyeV8xX3JlYWRfMQoKQ29sbGF0el9zdGF0ZV8wX2NhcnJ5XzFfcmVhZF8wCiAgICAwIDEgTCBDb2xsYXR6X3N0YXRlXzBfY2FycnlfMAogICAgMSAxIEwgZXhwYW5kCgpDb2xsYXR6X3N0YXRlXzBfY2FycnlfMV9yZWFkXzEKOyB3ZSB1c2UgdGhpcyBmaXJzdCBydy1pbnN0cnVjdGlvbiB0byB3cml0ZSB0aGUgZW5kaW5nIHBhdHRlcm4gb2YgMSB3aXRoIGEgY2FycnkKICAgIDAgMSBMIGV4cGFuZAogICAgMSAwIEwgQ29sbGF0el9zdGF0ZV8xX2NhcnJ5XzEKCkNvbGxhdHpfc3RhdGVfMV9jYXJyeV8wCiAgICAwIDEgTCBDb2xsYXR6X3N0YXRlXzFfY2FycnlfMF9yZWFkXzAKICAgIDEgMCBMIENvbGxhdHpfc3RhdGVfMV9jYXJyeV8wX3JlYWRfMQoKQ29sbGF0el9zdGF0ZV8xX2NhcnJ5XzBfcmVhZF8wCiAgICAwIDEgTCBDb2xsYXR6X3N0YXRlXzBfY2FycnlfMAogICAgMSAxIEwgZXhwYW5kCgpDb2xsYXR6X3N0YXRlXzFfY2FycnlfMF9yZWFkXzEKOyB3ZSB1c2UgdGhpcyBmaXJzdCBydy1pbnN0cnVjdGlvbiB0byB3cml0ZSB0aGUgZW5kaW5nIHBhdHRlcm4gb2YgMSB3aXRoIGEgY2FycnkKICAgIDAgMSBMIENvbGxhdHpfc3RhdGVfMF9jYXJyeV8xX3JlYWRfMQogICAgMSAwIEwgQ29sbGF0el9zdGF0ZV8xX2NhcnJ5XzEKCkNvbGxhdHpfc3RhdGVfMV9jYXJyeV8xCiAgICAwIDAgTCBDb2xsYXR6X3N0YXRlXzFfY2FycnlfMV9yZWFkXzAKICAgIDEgMSBMIENvbGxhdHpfc3RhdGVfMV9jYXJyeV8xX3JlYWRfMQoKQ29sbGF0el9zdGF0ZV8xX2NhcnJ5XzFfcmVhZF8wCiAgICAwIDAgTCBDb2xsYXR6X3N0YXRlXzBfY2FycnlfMQogICAgMSAwIEwgQ29sbGF0el9zdGF0ZV8xX2NhcnJ5XzBfcmVhZF8xCgpDb2xsYXR6X3N0YXRlXzFfY2FycnlfMV9yZWFkXzEKICAgIC0KICAgIDEgMSBMIENvbGxhdHpfc3RhdGVfMV9jYXJyeV8xCgpzdGFydF9jb21wYXJpbmdfZmlyc3Rfc3RlcAogICAgLQogICAgMSAxIEwgc3RhcnRfY29tcGFyaW5nCgpzdGFydF9jb21wYXJpbmcKICAgIDAgMCBMIHN0YXJ0X2NvbXBhcmluZ19jaGVja19iaXRfMAogICAgMSAxIEwgc3RhcnRfY29tcGFyaW5nX2NoZWNrX2JpdF8xCgpzdGFydF9jb21wYXJpbmdfY2hlY2tfYml0XzAKICAgIDAgMSBMIHN0YXJ0X2NvbXBhcmluZwogICAgMSAxIEwgc3RhcnRfY29tcGFyaW5nX2ZpcnN0X21hcmsKCnN0YXJ0X2NvbXBhcmluZ19jaGVja19iaXRfMQogICAgLQogICAgMSAwIEwgc3RhcnRfY29tcGFyaW5nCgpzdGFydF9jb21wYXJpbmdfZmlyc3RfbWFyawogICAgMCAwIEwgc3RhcnRfY29tcGFyaW5nX2ZpcnN0X21hcmtfY2hlY2tfYml0XzAKICAgIDEgMSBMIHN0YXJ0X2NvbXBhcmluZ19maXJzdF9tYXJrX2NoZWNrX2JpdF8xCgpzdGFydF9jb21wYXJpbmdfZmlyc3RfbWFya19jaGVja19iaXRfMAogICAgMCAwIEwgc3RhcnRfY29tcGFyaW5nX2ZpcnN0X21hcmsKICAgIDEgMCBSIGRleHBhbmQKCnN0YXJ0X2NvbXBhcmluZ19maXJzdF9tYXJrX2NoZWNrX2JpdF8xCiAgICAtCiAgICAxIDEgTCBzdGFydF9jb21wYXJpbmdfZmlyc3RfbWFyawoKZGV4cGFuZAogICAgMCAwIFIgZGV4cGFuZF9iaXMKICAgIC0KCmRleHBhbmRfYmlzCiAgICAwIDEgUiBkZXhwYW5kX2Jpc19yZWFkXzAKICAgIDEgMSBSIGRleHBhbmRfYmlzX3JlYWRfMQoKZGV4cGFuZF9iaXNfcmVhZF8wCiAgICAwIDAgUiBnb19jb21wYXJlXzAKICAgIC0KCmRleHBhbmRfYmlzX3JlYWRfMQogICAgLQogICAgMSAwIFIgZ29fY29tcGFyZV8xCgpnb19jb21wYXJlXzBfaWdub3JlCiAgICAwIDAgUiBnb19jb21wYXJlXzAKICAgIC0KCmdvX2NvbXBhcmVfMV9pZ25vcmUKICAgIDAgMCBSIGdvX2NvbXBhcmVfMQogICAgLQoKZ29fY29tcGFyZV8wCiAgICAwIDAgUiBnb19jb21wYXJlXzBfaWdub3JlCiAgICAxIDEgUiBnb19jb21wYXJlXzBfY2hlY2tfYml0XzEKCmdvX2NvbXBhcmVfMQogICAgMCAwIFIgZ29fY29tcGFyZV8xX2lnbm9yZQogICAgMSAxIFIgZ29fY29tcGFyZV8xX2NoZWNrX2JpdF8xCgpnb19jb21wYXJlXzBfY2hlY2tfYml0XzEKICAgIDAgMCBSIGdvX2NvbXBhcmVfMF9maXJzdF9tYXJrCiAgICAxIDEgUiBnb19jb21wYXJlXzAKCmdvX2NvbXBhcmVfMV9jaGVja19iaXRfMQogICAgMCAwIFIgZ29fY29tcGFyZV8xX2ZpcnN0X21hcmsKICAgIDEgMSBSIGdvX2NvbXBhcmVfMQoKZ29fY29tcGFyZV8wX2ZpcnN0X21hcmtfaWdub3JlCiAgICAwIDAgUiBnb19jb21wYXJlXzBfZmlyc3RfbWFyawogICAgMSAwIFIgZ29fY29tcGFyZV8wX2ZpcnN0X21hcmsKCmdvX2NvbXBhcmVfMV9maXJzdF9tYXJrX2lnbm9yZQogICAgMCAwIFIgZ29fY29tcGFyZV8xX2ZpcnN0X21hcmsKICAgIDEgMCBSIGdvX2NvbXBhcmVfMV9maXJzdF9tYXJrCgpnb19jb21wYXJlXzBfZmlyc3RfbWFyawogICAgMCAwIFIgZ29fY29tcGFyZV8wX2ZpcnN0X21hcmtfaWdub3JlCiAgICAxIDEgUiBnb19jb21wYXJlXzBfc2Vjb25kX21hcmtfcmVhZF8xCgpnb19jb21wYXJlXzBfc2Vjb25kX21hcmsKICAgIDAgMCBSIGdvX2NvbXBhcmVfMF9zZWNvbmRfbWFya19yZWFkXzAKICAgIDEgMSBSIGdvX2NvbXBhcmVfMF9zZWNvbmRfbWFya19yZWFkXzEKCmdvX2NvbXBhcmVfMF9zZWNvbmRfbWFya19yZWFkXzAKICAgIDAgMCBSIGdvX2NvbXBhcmVfMF9zZWNvbmRfbWFyawogICAgMSAwIFIgY2hlY2tfaWZfY3ljbGVfZm91bmQgCgpnb19jb21wYXJlXzBfc2Vjb25kX21hcmtfcmVhZF8xCiAgICAwIDEgUiBub3RfY3ljbGVfd3JhcF91cAogICAgMSAxIFIgZ29fY29tcGFyZV8wX3NlY29uZF9tYXJrCgpnb19jb21wYXJlXzFfZmlyc3RfbWFyawogICAgMCAwIFIgZ29fY29tcGFyZV8xX2ZpcnN0X21hcmtfaWdub3JlCiAgICAxIDEgUiBnb19jb21wYXJlXzFfc2Vjb25kX21hcmtfcmVhZF8xCgpnb19jb21wYXJlXzFfc2Vjb25kX21hcmsKICAgIDAgMCBSIGdvX2NvbXBhcmVfMV9zZWNvbmRfbWFya19yZWFkXzAKICAgIDEgMSBSIGdvX2NvbXBhcmVfMV9zZWNvbmRfbWFya19yZWFkXzEKCmdvX2NvbXBhcmVfMV9zZWNvbmRfbWFya19yZWFkXzAKICAgIDAgMCBSIGdvX2NvbXBhcmVfMV9zZWNvbmRfbWFyawogICAgMSAwIFIgbm90X2N5Y2xlX3dyYXBfdXAKCmdvX2NvbXBhcmVfMV9zZWNvbmRfbWFya19yZWFkXzEKICAgIDAgMSBSIGNoZWNrX2lmX2N5Y2xlX2ZvdW5kCiAgICAxIDEgTCBnb19jb21wYXJlXzFfc2Vjb25kX21hcmsKCnNraXBfZmlyc3RfbWFya19maXJzdF9zdGVwCiAgICAwIDAgTCBza2lwX2ZpcnN0X21hcmsKICAgIDEgMSBMIHNraXBfZmlyc3RfbWFyawoKc2tpcF9maXJzdF9tYXJrX2lnbm9yZQogICAgLQogICAgMSAxIEwgc2tpcF9maXJzdF9tYXJrCgpza2lwX2ZpcnN0X21hcmsKICAgIDAgMCBMIHNraXBfZmlyc3RfbWFya19jaGVja18wCiAgICAxIDEgTCBza2lwX2ZpcnN0X21hcmtfaWdub3JlCgpza2lwX2ZpcnN0X21hcmtfY2hlY2tfMAogICAgMCAwIEwgc2tpcF9maXJzdF9tYXJrCiAgICAxIDEgTCBzdGFydF9jb21wYXJpbmdfZmlyc3RfbWFyawoKY2hlY2tfaWZfY3ljbGVfZm91bmQKICAgIDAgMCBMIHNraXBfZmlyc3RfbWFyawogICAgMSAxIFIgY2hlY2tfaWZfY3ljbGVfZm91bmRfYmlzCgpjaGVja19pZl9jeWNsZV9mb3VuZF9iaXMKICAgIDAgMCBMIHNraXBfZmlyc3RfbWFya19maXJzdF9zdGVwCiAgICAxIDAgTCBjaGVja19ub25fdHJpdmlhbF9jeWNsZV9pZ25vcmUKCmNoZWNrX25vbl90cml2aWFsX2N5Y2xlX2lnbm9yZQogICAgMCAwIEwgY2hlY2tfbm9uX3RyaXZpYWxfY3ljbGUKICAgIDEgMSBMIGNoZWNrX25vbl90cml2aWFsX2N5Y2xlCgpjaGVja19ub25fdHJpdmlhbF9jeWNsZQogICAgMCAwIEwgY2hlY2tfbm9uX3RyaXZpYWxfY3ljbGUKICAgIDEgMSBMIGNoZWNrX25vbl90cml2aWFsX2N5Y2xlX29uZQoKY2hlY2tfbm9uX3RyaXZpYWxfY3ljbGVfb25lCiAgICAtCiAgICAxIDEgTCBjaGVja19ub25fdHJpdmlhbF9jeWNsZV9vbmVfY29udGludWVfY2hlY2tpbmcKCmNoZWNrX25vbl90cml2aWFsX2N5Y2xlX29uZV9jb250aW51ZV9jaGVja2luZ19yZWFkXzAKICAgIDAgMCBMIGNoZWNrX25vbl90cml2aWFsX2N5Y2xlX29uZV9jb250aW51ZV9jaGVja2luZwogICAgMSAxIFIgc2tpcF90b19kb19wbHVzX29uZV9pZ25vcmUKCnNraXBfdG9fZG9fcGx1c19vbmVfaWdub3JlCiAgICAwIDAgUiBza2lwX3RvX2RvX3BsdXNfb25lCiAgICAtCgpza2lwX3RvX2RvX3BsdXNfb25lX3JlYWRfMQogICAgMCAwIEwgcGx1c19vbmVfaWdub3JlCiAgICAxIDEgUiBza2lwX3RvX2RvX3BsdXNfb25lCgpza2lwX3RvX2RvX3BsdXNfb25lCiAgICAwIDAgUiBza2lwX3RvX2RvX3BsdXNfb25lX2lnbm9yZQogICAgMSAxIFIgc2tpcF90b19kb19wbHVzX29uZV9yZWFkXzEKCgoKY2hlY2tfbm9uX3RyaXZpYWxfY3ljbGVfb25lX2NvbnRpbnVlX2NoZWNraW5nCiAgICAwIDAgTCBjaGVja19ub25fdHJpdmlhbF9jeWNsZV9vbmVfY29udGludWVfY2hlY2tpbmdfcmVhZF8wCiAgICAxIDEgTCBoYWx0CgoKCm5vdF9jeWNsZV93cmFwX3VwX3JlYWRfMAogICAgLQogICAgMSAwIFIgbm90X2N5Y2xlX3dyYXBfdXAKCm5vdF9jeWNsZV93cmFwX3VwX3JlYWRfMQogICAgMCAxIFIgbm90X2N5Y2xlX3dyYXBfdXAKICAgIDEgMCBMIHBsdXNfb25lX2lnbm9yZQoKbm90X2N5Y2xlX3dyYXBfdXAKICAgIDAgMCBSIG5vdF9jeWNsZV93cmFwX3VwX3JlYWRfMAogICAgMSAxIFIgbm90X2N5Y2xlX3dyYXBfdXBfcmVhZF8xCgpwbHVzX29uZV9pZ25vcmUKICAgIC0KICAgIDEgMSBMIHBsdXNfb25lCgpwbHVzX29uZV9yZWFkXzAKICAgIDAgMSBMIHBsdXNfemVybwogICAgMSAxIFIgZXhwYW5kX2NvdW50ZXJfc3BhY2VfaWdub3JlCgpwbHVzX29uZV9yZWFkXzEKICAgIC0KICAgIDEgMCBMIHBsdXNfb25lCgpwbHVzX29uZQogICAgMCAxIEwgcGx1c19vbmVfcmVhZF8wCiAgICAxIDAgTCBwbHVzX29uZV9yZWFkXzEKCnBsdXNfemVyb19yZWFkXzAKICAgIDAgMCBMIHBsdXNfemVybwogICAgMSAwIFIgcmVzZXRfY29weV9tYXJrZXIgCgpyZXNldF9jb3B5X21hcmtlcgogICAgMCAxIEwgcmVzZXRfY29weV9tYXJrZXJfaWdub3JlCiAgICAtCgpyZXNldF9jb3B5X21hcmtlcl9pZ25vcmUKICAgIDAgMCBMIHJlc2V0X2NvbXB1dGF0aW9uX3pvbmUKICAgIDEgMCBMIHJlc2V0X2NvbXB1dGF0aW9uX3pvbmUKCnJlc2V0X2NvbXB1dGF0aW9uX3pvbmVfcmVhZF8wCiAgICAwIDAgTCByZXNldF9jb21wdXRhdGlvbl96b25lCiAgICAxIDAgUiBmaW5pc2hfcmVzZXRfY29tcF96b25lCgpyZXNldF9jb21wdXRhdGlvbl96b25lX3JlYWRfMQogICAgLQogICAgMSAwIEwgcmVzZXRfY29tcHV0YXRpb25fem9uZQoKcmVzZXRfY29tcHV0YXRpb25fem9uZQogICAgMCAwIEwgcmVzZXRfY29tcHV0YXRpb25fem9uZV9yZWFkXzAKICAgIDEgMCBMIHJlc2V0X2NvbXB1dGF0aW9uX3pvbmVfcmVhZF8xCgpmaW5pc2hfcmVzZXRfY29tcF96b25lCiAgICAwIDAgUiBmaW5pc2hfcmVzZXRfY29tcF96b25lCiAgICAxIDEgTCBmaW5pc2hfcmVzZXRfY29tcF96b25lX3NraXAKCmZpbmlzaF9yZXNldF9jb21wX3pvbmVfc2tpcAogICAgMCAwIEwgZmluaXNoX3Jlc2V0X2NvbXBfem9uZV9za2lwX2JpcwogICAgLQoKZmluaXNoX3Jlc2V0X2NvbXBfem9uZV9za2lwX2JpcwogICAgMCAwIEwgcmVzZXRfY29tcHV0YXRpb25fem9uZV9iaXMKICAgIC0KCnJlc2V0X2NvbXB1dGF0aW9uX3pvbmVfYmlzCiAgICAwIDEgUiBsZXRzX2dvX29uX2Fub3RoZXJfcm91bmQKICAgIDEgMSBSIGxldHNfZ29fb25fYW5vdGhlcl9yb3VuZAoKcGx1c196ZXJvCiAgICAwIDAgTCBwbHVzX3plcm9fcmVhZF8wCiAgICAxIDEgTCBwbHVzX3plcm8KCmxldHNfZ29fb25fYW5vdGhlcl9yb3VuZAogICAgMCAwIFIgbGV0c19nb19vbl9hbm90aGVyX3JvdW5kX2dvdG9fZW5kCiAgICAtCgpza2lwX3RoYXRfb25lX2JlZm9yZV93ZV9zdGFydAogICAgLQogICAgMSAxIEwgY3pfc3RhcnRfYm91bmNpbmcKCmxldHNfZ29fb25fYW5vdGhlcl9yb3VuZF9nb3RvX2VuZF9jaGVja19iaXRfMQogICAgMCAxIEwgc2tpcF90aGF0X29uZV9iZWZvcmVfd2Vfc3RhcnQKICAgIDEgMSBSIGxldHNfZ29fb25fYW5vdGhlcl9yb3VuZF9nb3RvX2VuZAoKbGV0c19nb19vbl9hbm90aGVyX3JvdW5kX2dvdG9fZW5kX2lnbm9yZQogICAgMCAwIFIgbGV0c19nb19vbl9hbm90aGVyX3JvdW5kX2dvdG9fZW5kCiAgICAxIDEgUiBsZXRzX2dvX29uX2Fub3RoZXJfcm91bmRfZ290b19lbmQKCmxldHNfZ29fb25fYW5vdGhlcl9yb3VuZF9nb3RvX2VuZAogICAgMCAwIFIgbGV0c19nb19vbl9hbm90aGVyX3JvdW5kX2dvdG9fZW5kX2lnbm9yZQogICAgMSAxIFIgbGV0c19nb19vbl9hbm90aGVyX3JvdW5kX2dvdG9fZW5kX2NoZWNrX2JpdF8xCgpleHBhbmRfY291bnRlcl9zcGFjZV9pZ25vcmUKICAgIDAgMCBSIGV4cGFuZF9jb3VudGVyX3NwYWNlCiAgICAxIDAgUiBleHBhbmRfY291bnRlcl9zcGFjZQoKZXhwYW5kX2NvdW50ZXJfc3BhY2UKICAgIDAgMCBSIGV4cGFuZF9jb3VudGVyX3NwYWNlX2lnbm9yZQogICAgMSAxIFIgZXhwYW5kX2NvdW50ZXJfc3BhY2VfY2hlY2tfYml0XzEKCmV4cGFuZF9jb3VudGVyX3NwYWNlX2NoZWNrX2JpdF8xCiAgICAwIDEgUiBleHBhbmRfY291bnRlcl9zcGFjZV95ZXN5ZXN5ZXMKICAgIDEgMSBSIGV4cGFuZF9jb3VudGVyX3NwYWNlCgpleHBhbmRfY291bnRlcl9zcGFjZV95ZXN5ZXN5ZXMKICAgIDAgMSBSIGV4cGFuZF9jb3VudGVyX3NwYWNlX3llc3llc3llc1lFUwogICAgLQoKZXhwYW5kX2NvdW50ZXJfc3BhY2VfeWVzeWVzeWVzWUVTCiAgICAwIDAgTCBpZ25vcmVfdGhhdF9sYXN0X29uZQogICAgLQoKaWdub3JlX3RoYXRfbGFzdF9vbmUKICAgIC0KICAgIDEgMSBMIHBsdXNfb25lCgo=',
'BB_5_chaotic.txt':'OyBUaGlzIG1hY2hpbmUgaXMgcmVmZXJyZWQgYXMgImNoYW90aWMiIGluIHRoZSAiQXR0YWNraW5nIEJCKDUpIiBwYXBlciBieSBNYXJ4ZW4gYW5kIEJ1bnRyb2NrCgpibGFua19zeW1ib2w6IDAKCkEKMCAxIEwgQgoxIDEgUiBCCgpCCjAgMSBSIEMKMSAwIEwgRQoKQwowIDAgUiBECjEgMCBMIEEKCkQKMCAxIEwgQQoxIDAgUiBECgpFCjAgSGFsdAoxIDAgTCBDCgo=',
'weak_Collatz_conjecture_43_4.txt':'OyBUaGlzIG1hY2hpbmUgaGFsdHMgaWYgYW5kIG9ubHkgaWYgdGhlIHdlYWsgQ29sbGF0eiBjb25qZWN0dXJlIGlzIGZhbHNlLgo7IFRoZSBjb25qZWN0dXJlIHN0YXRlcyB0aGF0IHRoZSBvbmx5IGN5Y2xlcyBvbiB0aGUgbmF0dXJhbCBudW1iZXJzIGFyZSAwLDAsIGFuZCAxLDIsMSwyLi4KOyBUaGlzIG1hY2hpbmUgaGFzIDQzIHN0YXRlcyBhbmQgNCBzeW1ib2xzLgo7CjsgVGhpcyBtYWNoaW5lIHdhcyBub3QgcHJvdmVuIGNvcnJlY3QgeWV0LgoKaW5pdGlhbF9zdGF0ZTogcGx1c19vbmVfbm90X2RvbmVfcmVzZXRfbWFyawoKY29weV94MAowIDEgTCB3aGF0X2JpdF90b19jb3B5CjEgMSBMIGlnbm9yZV9iaXQKIyAjIFIgZ29fdG9fQ29sbGF0el96b25lX3RvX3J1bl9Db2xsYXR6CgoKaWdub3JlX2JpdAowIDAgTCBjb3B5X3gwCjEgMSBMIGNvcHlfeDAKCgp3aGF0X2JpdF90b19jb3B5CjAgMCBSIGdvX3RvX0NvbGxhdHpfem9uZV90b19jb3B5X2JpdF8wCjEgMSBSIGdvX3RvX0NvbGxhdHpfem9uZV90b19jb3B5X2JpdF8xCgoKZ29fdG9fQ29sbGF0el96b25lX3RvX2NvcHlfYml0XzAKMCAwIFIgZ29fdG9fQ29sbGF0el96b25lX3RvX2NvcHlfYml0XzAKMSAxIFIgZ29fdG9fQ29sbGF0el96b25lX3RvX2NvcHlfYml0XzAKIyAjIFIgY29weV9iaXRfMAoKCmdvX3RvX0NvbGxhdHpfem9uZV90b19jb3B5X2JpdF8xCjAgMCBSIGdvX3RvX0NvbGxhdHpfem9uZV90b19jb3B5X2JpdF8xCjEgMSBSIGdvX3RvX0NvbGxhdHpfem9uZV90b19jb3B5X2JpdF8xCiMgIyBSIGNvcHlfYml0XzEKCgpjb3B5X2JpdF8wCjAgMCBSIGNvcHlfYml0XzAKMSAxIFIgY29weV9iaXRfMAojIDAgTCBnb190b194MF96b25lX3RvX2NvbnRpbnVlX2NvcHkKCgpjb3B5X2JpdF8xCjAgMCBSIGNvcHlfYml0XzEKMSAxIFIgY29weV9iaXRfMQojIDEgTCBnb190b194MF96b25lX3RvX2NvbnRpbnVlX2NvcHkKCmdvX3RvX3gwX3pvbmVfdG9fY29udGludWVfY29weQowIDAgTCBnb190b194MF96b25lX3RvX2NvbnRpbnVlX2NvcHkKMSAxIEwgZ29fdG9feDBfem9uZV90b19jb250aW51ZV9jb3B5CiMgIyBMIGNvcHlfeDAKCgpnb190b19Db2xsYXR6X3pvbmVfdG9fcnVuX0NvbGxhdHoKMCAwIFIgZ29fdG9fQ29sbGF0el96b25lX3RvX3J1bl9Db2xsYXR6CjEgMSBSIGdvX3RvX0NvbGxhdHpfem9uZV90b19ydW5fQ29sbGF0egojICMgUiBDb2xsYXR6X21hY2hpbmVfaWdub3JlX3RyYWlsaW5nXzAKCkNvbGxhdHpfbWFjaGluZV9pZ25vcmVfdHJhaWxpbmdfMAowIGEgTCBnb19jaGVja19pZl9tb3JlX0NvbGxhdHpfaXRlcmF0aW9uc19hcmVfbmVlZGVkCjEgYSBSIENvbGxhdHpfbWFjaGluZV9vbmVfY2FycnkKYSBhIFIgQ29sbGF0el9tYWNoaW5lX2lnbm9yZV90cmFpbGluZ18wCiMgYSBMIGdvX2NoZWNrX2lmX21vcmVfQ29sbGF0el9pdGVyYXRpb25zX2FyZV9uZWVkZWQgOyBoYWNrIHRvIGlnbnJlIDAwMAoKQ29sbGF0el9tYWNoaW5lX29uZV9jYXJyeQowIDAgUiBDb2xsYXR6X21hY2hpbmVfemVyb19jYXJyeQoxIDEgUiBDb2xsYXR6X21hY2hpbmVfb25lX2NhcnJ5CiMgMCBSIENvbGxhdHpfbWFjaGluZV96ZXJvX2NhcnJ5CgpDb2xsYXR6X21hY2hpbmVfemVyb19jYXJyeQowIDEgUiBDb2xsYXR6X21hY2hpbmVfemVybwoxIDAgUiBDb2xsYXR6X21hY2hpbmVfb25lX2NhcnJ5CiMgMSBSIENvbGxhdHpfbWFjaGluZV96ZXJvCgpDb2xsYXR6X21hY2hpbmVfemVybwowIDAgUiBDb2xsYXR6X21hY2hpbmVfemVybwoxIDEgUiBDb2xsYXR6X21hY2hpbmVfb25lCiMgIyBMIGdvX2NoZWNrX2lmX21vcmVfQ29sbGF0el9pdGVyYXRpb25zX2FyZV9uZWVkZWQKCkNvbGxhdHpfbWFjaGluZV9vbmUKMCAxIFIgQ29sbGF0el9tYWNoaW5lX3plcm8KMSAwIFIgQ29sbGF0el9tYWNoaW5lX29uZV9jYXJyeQojIDEgUiBDb2xsYXR6X21hY2hpbmVfemVybwoKZ29fY2hlY2tfaWZfbW9yZV9Db2xsYXR6X2l0ZXJhdGlvbnNfYXJlX25lZWRlZAowIDAgTCBnb19jaGVja19pZl9tb3JlX0NvbGxhdHpfaXRlcmF0aW9uc19hcmVfbmVlZGVkCjEgMSBMIGdvX2NoZWNrX2lmX21vcmVfQ29sbGF0el9pdGVyYXRpb25zX2FyZV9uZWVkZWQKYSBhIEwgZ29fY2hlY2tfaWZfbW9yZV9Db2xsYXR6X2l0ZXJhdGlvbnNfYXJlX25lZWRlZAojICMgTCBjaGVja19pZl9tb3JlX0NvbGxhdHpfaXRlcmF0aW9uc19hcmVfbmVlZGVkCgpjaGVja19pZl9tb3JlX0NvbGxhdHpfaXRlcmF0aW9uc19hcmVfbmVlZGVkCjAgMCBMIGlnbm9yZV9hbmRfdGhlbl9jaGVja19pZl9tb3JlX0NvbGxhdHpfaXRlcmF0aW9uc19hcmVfbmVlZGVkCjEgMCBSIGdvX3RvX0NvbGxhdHpfem9uZV90b19ydW5fQ29sbGF0egojICMgUiBnb190b19Db2xsYXR6X3pvbmVfdGhlbl9jb21wYXJlCgppZ25vcmVfYW5kX3RoZW5fY2hlY2tfaWZfbW9yZV9Db2xsYXR6X2l0ZXJhdGlvbnNfYXJlX25lZWRlZAowIDAgTCBjaGVja19pZl9tb3JlX0NvbGxhdHpfaXRlcmF0aW9uc19hcmVfbmVlZGVkCjEgMSBMIGNoZWNrX2lmX21vcmVfQ29sbGF0el9pdGVyYXRpb25zX2FyZV9uZWVkZWQKCmdvX3RvX0NvbGxhdHpfem9uZV90aGVuX2NvbXBhcmUKMCAwIFIgZ29fdG9fQ29sbGF0el96b25lX3RoZW5fY29tcGFyZQoxIDEgUiBnb190b19Db2xsYXR6X3pvbmVfdGhlbl9jb21wYXJlCiMgIyBSIGdvX3RvX2VuZF9vZl9hX2luX0NvbGxhdHpfem9uZV90aGVuX2NvbXBhcmUKCmdvX3RvX2VuZF9vZl9hX2luX0NvbGxhdHpfem9uZV90aGVuX2NvbXBhcmUKMCBhIEwgZ29fdG9feDBfem9uZV90aGVuX2NvbXBhcmVfdG9fMAoxIGEgTCBnb190b194MF96b25lX3RoZW5fY29tcGFyZV90b18xCiMgYSBMIGdvX3RvX3gwX3pvbmVfdGhlbl9jb21wYXJlX3RvXzAKYSBhIFIgZ29fdG9fZW5kX29mX2FfaW5fQ29sbGF0el96b25lX3RoZW5fY29tcGFyZQoKZ29fdG9feDBfem9uZV90aGVuX2NvbXBhcmVfdG9fMAowIDAgTCBnb190b194MF96b25lX3RoZW5fY29tcGFyZV90b18wCjEgMSBMIGdvX3RvX3gwX3pvbmVfdGhlbl9jb21wYXJlX3RvXzAKIyAjIEwgZmluZF9iaXRfdG9fY29tcGFyZV90b18wCmEgYSBMIGdvX3RvX3gwX3pvbmVfdGhlbl9jb21wYXJlX3RvXzAKCmZpbmRfYml0X3RvX2NvbXBhcmVfdG9fMAowIDEgTCBjb21wYXJlX3RvXzAKMSAxIEwgaWdub3JlX2JpdF90aGVuX2NvbXBhcmVfdG9fMAojICMgUiBjaGVja19oYWx0aW5nX2NvbmRpdGlvbiAKCmlnbm9yZV9iaXRfdGhlbl9jb21wYXJlX3RvXzAKMCAwIEwgZmluZF9iaXRfdG9fY29tcGFyZV90b18wCjEgMSBMIGZpbmRfYml0X3RvX2NvbXBhcmVfdG9fMAoKY29tcGFyZV90b18wCjAgMCBSIGdvX3RvX0NvbGxhdHpfem9uZV90aGVuX2NvbXBhcmUKMSAxIFIgZ29fdG9fQ29sbGF0el96b25lX3RoZW5fd2lwZSA7IDAgIT0gMQoKZ29fdG9feDBfem9uZV90aGVuX2NvbXBhcmVfdG9fMQowIDAgTCBnb190b194MF96b25lX3RoZW5fY29tcGFyZV90b18xCjEgMSBMIGdvX3RvX3gwX3pvbmVfdGhlbl9jb21wYXJlX3RvXzEKIyAjIEwgZmluZF9iaXRfdG9fY29tcGFyZV90b18xCmEgYSBMIGdvX3RvX3gwX3pvbmVfdGhlbl9jb21wYXJlX3RvXzEKCmZpbmRfYml0X3RvX2NvbXBhcmVfdG9fMQowIDEgTCBjb21wYXJlX3RvXzEKMSAxIEwgaWdub3JlX2JpdF90aGVuX2NvbXBhcmVfdG9fMQojICMgUiBjaGVja19oYWx0aW5nX2NvbmRpdGlvbiAKCmlnbm9yZV9iaXRfdGhlbl9jb21wYXJlX3RvXzEKMCAwIEwgZmluZF9iaXRfdG9fY29tcGFyZV90b18xCjEgMSBMIGZpbmRfYml0X3RvX2NvbXBhcmVfdG9fMQoKY29tcGFyZV90b18xCjAgMCBSIGdvX3RvX0NvbGxhdHpfem9uZV90aGVuX3dpcGUgOyAxICE9IDAKMSAxIFIgZ29fdG9fQ29sbGF0el96b25lX3RoZW5fY29tcGFyZQoKY2hlY2tfaGFsdGluZ19jb25kaXRpb24KMCAwIFIgaWdub3JlX2JpdF90aGVuX2NoZWNrX2hhbHRpbmdfY29uZGl0aW9uCjEgMSBSIGlnbm9yZV9iaXRfdGhlbl9jaGVja19oYWx0aW5nX2NvbmRpdGlvbl8xCiMgIyBSIHdpcGVfQ29sbGF0el96b25lX3RoZW5fcGx1c19vbmUKCmlnbm9yZV9iaXRfdGhlbl9jaGVja19oYWx0aW5nX2NvbmRpdGlvbgoxIDEgUiBjaGVja19oYWx0aW5nX2NvbmRpdGlvbgoKaWdub3JlX2JpdF90aGVuX2NoZWNrX2hhbHRpbmdfY29uZGl0aW9uXzEKMSAxIFIgY2hlY2tfaGFsdGluZ19jb25kaXRpb25fMQoKY2hlY2tfaGFsdGluZ19jb25kaXRpb25fMQowIDAgUiBpZ25vcmVfYml0X3RoZW5fY2hlY2tfaGFsdGluZ19jb25kaXRpb25fMgoxIDEgUiBpZ25vcmVfYml0X3RoZW5fY2hlY2tfaGFsdGluZ19jb25kaXRpb25fMgojICMgUiB3aXBlX0NvbGxhdHpfem9uZV90aGVuX3BsdXNfb25lCgppZ25vcmVfYml0X3RoZW5fY2hlY2tfaGFsdGluZ19jb25kaXRpb25fMgoxIDEgUiBjaGVja19oYWx0aW5nX2NvbmRpdGlvbl8yCgpjaGVja19oYWx0aW5nX2NvbmRpdGlvbl8yCjAgMCBSIGlnbm9yZV9iaXRfdGhlbl9jaGVja19oYWx0aW5nX2NvbmRpdGlvbl8zCjEgMSBSIGlnbm9yZV9iaXRfdGhlbl9jaGVja19oYWx0aW5nX2NvbmRpdGlvbl8zCiMgIyBSIHdpcGVfQ29sbGF0el96b25lX3RoZW5fcGx1c19vbmUKCmNoZWNrX2hhbHRpbmdfY29uZGl0aW9uXzMKMCAwIFIgY2hlY2tfaGFsdGluZ19jb25kaXRpb25fMwoxIDEgUiBjaGVja19oYWx0aW5nX2NvbmRpdGlvbl8zCiMgIyBSIGNoZWNrX2hhbHRpbmdfY29uZGl0aW9uXzQKCmNoZWNrX2hhbHRpbmdfY29uZGl0aW9uXzQKMCAjIFIgd2lwZV9Db2xsYXR6X3pvbmVfdGhlbl9wbHVzX29uZQoxICMgUiB3aXBlX0NvbGxhdHpfem9uZV90aGVuX3BsdXNfb25lCiMgSEFMVAphICMgUiB3aXBlX0NvbGxhdHpfem9uZV90aGVuX3BsdXNfb25lCgpnb190b19Db2xsYXR6X3pvbmVfdGhlbl93aXBlCjAgMCBSIGdvX3RvX0NvbGxhdHpfem9uZV90aGVuX3dpcGUKMSAxIFIgZ29fdG9fQ29sbGF0el96b25lX3RoZW5fd2lwZQojICMgUiB3aXBlX0NvbGxhdHpfem9uZV90aGVuX3BsdXNfb25lCgp3aXBlX0NvbGxhdHpfem9uZV90aGVuX3BsdXNfb25lCjAgIyBSIHdpcGVfQ29sbGF0el96b25lX3RoZW5fcGx1c19vbmUKMSAjIFIgd2lwZV9Db2xsYXR6X3pvbmVfdGhlbl9wbHVzX29uZQphICMgUiB3aXBlX0NvbGxhdHpfem9uZV90aGVuX3BsdXNfb25lCiMgIyBMIGdvX3RvX3gwX3pvbmVfdGhlbl9wbHVzX29uZQoKZ29fdG9feDBfem9uZV90aGVuX3BsdXNfb25lCjAgMCBMIHBsdXNfb25lX01FUkdFX2V4dGVuZF94MF96b25lX3RoZW5fZ29fY29weQoxIDAgTCBwbHVzX29uZV9NRVJHRV9leHRlbmRfeDBfem9uZV90aGVuX2dvX2NvcHkKIyAjIEwgZ29fdG9feDBfem9uZV90aGVuX3BsdXNfb25lCiAKcGx1c19vbmVfTUVSR0VfZXh0ZW5kX3gwX3pvbmVfdGhlbl9nb19jb3B5IAo7IE9wdGltaXNhdGlvbiBzdGF0ZXMgJ3BsdXNfb25lJwo7IGFuZCBleHRlbmRfeDBfem9uZV90aGVuX2dvX2NvcHkgY291bmQgYmUgbWVyZ2VkCjAgMSBMIHBsdXNfb25lX2RvbmVfcmVzZXRfbWFyawoxIDAgTCBwbHVzX29uZV9ub3RfZG9uZV9yZXNldF9tYXJrCiMgMCBSIGdvX3RvX2JlZ2lubmluZ19vZl94MF96b25lX3RoZW5fY29weSA7IGV4dGVuZF94MF96b25lX3RoZW5fZ29fY29weQoKcGx1c19vbmVfbm90X2RvbmVfcmVzZXRfbWFyawowIDAgTCBwbHVzX29uZV9NRVJHRV9leHRlbmRfeDBfem9uZV90aGVuX2dvX2NvcHkKMSAwIEwgcGx1c19vbmVfTUVSR0VfZXh0ZW5kX3gwX3pvbmVfdGhlbl9nb19jb3B5CiMgMCBMIHBsdXNfb25lX01FUkdFX2V4dGVuZF94MF96b25lX3RoZW5fZ29fY29weQoKcGx1c19vbmVfZG9uZV9yZXNldF9tYXJrCjAgMCBMIHBsdXNfb25lX2RvbmUKMSAwIEwgcGx1c19vbmVfZG9uZQojICMgUiBnb190b19iZWdpbm5pbmdfb2ZfeDBfem9uZV90aGVuX2NvcHkKCnBsdXNfb25lX2RvbmUKMCAwIEwgcGx1c19vbmVfZG9uZV9yZXNldF9tYXJrCjEgMSBMIHBsdXNfb25lX2RvbmVfcmVzZXRfbWFyawoKZ29fdG9fYmVnaW5uaW5nX29mX3gwX3pvbmVfdGhlbl9jb3B5CjAgMCBSIGdvX3RvX2JlZ2lubmluZ19vZl94MF96b25lX3RoZW5fY29weQoxIDEgUiBnb190b19iZWdpbm5pbmdfb2ZfeDBfem9uZV90aGVuX2NvcHkKIyAjIEwgY29weV94MA==',
'busy_beaver_champion_5_2.txt':'OyBDdXJyZW50IDUsMiBidXN5IGJlYXZlciBjaGFtcGlvbgo7IEl0IGhhbHRzIGFmdGVyIDQ3LDE3Niw4NzAgc3RlcHMuCjsgSXQgaXMgY29uamVjdHVyZWQgdG8gYmUgdGhlIDUsMiB3aW5uZXIgKGkuZS4gbm8gb3RoZXIgNSwyIG1hY2hpbmUgZG8gYmV0dGVyLCBzZWUgaHR0cHM6Ly93d3cuc2NvdHRhYXJvbnNvbi5jb20vcGFwZXJzL2JiLnBkZikKOyBILiBNYXJ4ZW4gYW5kIEouIEJ1bnRyb2NrLiBBdHRhY2tpbmcgdGhlIEJ1c3kgQmVhdmVyIDUuIEJ1bGwuIEVBVENTLCA0MDoyNDfigJMyNTEsIDE5OTAuCjsgTW9yZSBpbmZvOiBodHRwczovL2FyeGl2Lm9yZy9hYnMvMDkwNi4zNzQ5djYKCmluaXRpYWxfc3RhdGU6IEEKYmxhbmtfc3ltYm9sOiAwCgpBCjAgMSBSIEIKMSAxIEwgQwoKQgowIDEgUiBDIAoxIDEgUiBCIAoKQwowIDEgUiBEIAoxIDAgTCBFIAoKRCAKMCAxIEwgQSAKMSAxIEwgRCAKCkUgCjAgSEFMVCAKMSAwIEwgQQ==',
}
 const defaultMachine = 'powers_of_two_5_4.txt';
 var sel = document.getElementById('select-preset');
 
Object.keys(presetMachines)
    .sort()
    .forEach(function (machineName, i) {
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode(machineName));
        if (machineName === defaultMachine) {
            opt.selected = true;
        }
        sel.appendChild(opt);
    });

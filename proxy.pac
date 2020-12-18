function FindProxyForURL(url, host) {
  if (isResolvable(host))
    return "DIRECT";
  else
    return "PROXY proxy.mydomain.com:8080";
}
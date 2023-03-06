export function useHello () {
  const hello = useState('Hello World')

  return {
    hello
  }
}

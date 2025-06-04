const useAsync = (_loading: boolean) => {
  return {
    loading: _loading,
    fetcher: () => {
      console.log('Fetcher');
    },
    data: {},
    error: {}
  };
};
export default useAsync;

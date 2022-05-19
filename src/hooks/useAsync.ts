const useAsync = (_loading: boolean) => {
  return {
    loading: '',
    fetcher: () => {
      console.log('Featcher');
    },
    data: {},
    error: {}
  };
};
export default useAsync;

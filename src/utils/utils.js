const getQueryVariable = variable => {
  const query = window.location.search.substring(1);
  const vars = query.split('&');

  for (const v of vars) {
    const pair = v.split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }

  return '';
};

export { getQueryVariable };

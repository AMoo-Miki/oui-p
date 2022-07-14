export const hasDisplayToggles = (code) => {
  return /DisplayToggles/.test(code);
};

export const cleanOuiImports = (code) => {
  return code
    .replace(
      /(from )'(..\/)+src\/components(\/?';)/,
      "from '@opensearch-project/oui';"
    )
    .replace(
      /(from )'(..\/)+src\/services(\/?';)/,
      "from '@opensearch-project/oui/lib/services';"
    );
};

export const listExtraDeps = (code) => {
  return code
    .match(
      // Match anything not directly calling oui (like lib dirs)
      /import(?!.*(opensearch-project\/oui|\.))\s.*?'(@[^.]+?\/)?[^.]+?['\/]/g
    )
    .map((match) => match.match(/'(.+)['\/]/)[1])
    .reduce((deps, dep) => {
      // Make sure that we are using the latest version of a dep
      deps[dep] = 'latest';
      return deps;
    }, {});
};

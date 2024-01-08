import inject from '@stylexjs/dev-runtime';
/**
 * StyleX ローカルだけですること。
 * https://stylexjs.com/docs/learn/installation/#local-development-only
 * 現在StyleXについて設定がよくできなく、一旦これを使って後で解決をする。
 * いつか、Injectは削除予定
//  */
inject({
  classNamePrefix: 'x',
  dev: true,
  test: false,
  styleResolution: 'application-order',
  useRemForFontSize: false,
});

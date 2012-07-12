Node.js CI Tutorial
===================

---

### [Travis CI](http://travis-ci.org/)

1. `Travice CI`にGitHubでログインします。
2. リポジトリのスイッチを設定し、`Travis-ci`を有効にします。
3. GitHubへプッシュしたらビルドは自動的に開始します。

---

### [Jenkins](https://jenkins-ci.org/)

1. [CloudBees](http://www.cloudbees.com/)で無料のJenkinsを利用します。
2. `SIGN UP FOR FREE`でアカウントを作成します。
3. Jenkinsの[プラグインの管理]で`Git plugin`と`GitHub plugin`をインストールします。
4. Jenkinsの[新規ジョブ作成]で`フリースタイル・プロジェクトのビルド`を作ります。
5. [CloudBees DEV@cloud Authorization]の`Public Key`をGitHubのDeploy keysに登録します。
6. [ソースコード管理システム]で`Git`を選んで`Repository URL`を設定します。
7. [ビルド・トリガ]で`Build when a change is pushed to GitHub`を選択します。
8. [ビルド]で`シェルの実行`を追加して`シェルスクリプト`にこれを追加します。
  > curl https://raw.github.com/hokaccha/nodebrew/master/nodebrew | perl - setup
  > export PATH=$HOME/.nodebrew/current/bin:$PATH
  > nodebrew install v0.8.2
  > nodebrew use v0.8.2
  > npm install
  > make test-xunit > xunit.xml
9. [ビルド後の処理]で`JUnitテスト結果の集計`を選んで`xunit.xml`を設定します。
10. GitHubの[Service Hooks]の`Jenkins (GitHub plugin)`でJenkins Hook Urlを設定します。
  > http://[myaccount].ci.cloudbees.com/github-webhook/
11. GitHubへプッシュしたらビルドは自動的に開始します。

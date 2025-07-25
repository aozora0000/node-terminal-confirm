#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// デフォルトのプロンプトメッセージ
const defaultPrompt = 'continue';
// コマンドライン引数から最初の引数を取得、なければデフォルトを使用
const prompt = process.argv[2] || defaultPrompt;

rl.question(`${prompt} [Y/n]?`, (answer) => {
    // 入力を小文字に変換して処理
    const normalizedAnswer = answer.toLowerCase().trim();

    // 空文字（Enterキーのみ）またはy/yes の場合は成功として終了
    if (normalizedAnswer === '' ||
        normalizedAnswer === 'y' ||
        normalizedAnswer === 'yes') {
        process.exit(0);
    }

    // それ以外は失敗として終了
    process.exit(1);

    rl.close();
});

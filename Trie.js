/**
 * Seminar 2.5 Simple Trie
 */

class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode(ch);
            }
            node = node.children[ch];
        }
        node.isWord = true;
    }

    hasNode(word){
        let node = this.root;
        for (const ch of word) {
            if (!node.children[ch]) {
                return false;
            }
            node = node.children[ch];
        }
        return node.isWord;
    }

    getAllNodes(){
        const result = [];
        const walk = (node, prefix) => {
            if (node.isWord) {
                result.push(prefix);
            }
            for (const ch in node.children) {
                walk(node.children[ch], prefix + ch);
            }
        };
        walk(this.root, "");
        return result;
    }
}

module.exports = { Trie };
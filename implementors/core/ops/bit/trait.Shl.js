(function() {var implementors = {};
implementors["bitvec"] = [{text:"impl&lt;C, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Shl.html\" title=\"trait core::ops::bit::Shl\">Shl</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bitvec/cursor/trait.Cursor.html\" title=\"trait bitvec::cursor::Cursor\">Cursor</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/bits/trait.Bits.html\" title=\"trait bitvec::bits::Bits\">Bits</a>,&nbsp;</span>",synthetic:false,types:["bitvec::boxed::BitBox"]},{text:"impl&lt;C, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Shl.html\" title=\"trait core::ops::bit::Shl\">Shl</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bitvec/cursor/trait.Cursor.html\" title=\"trait bitvec::cursor::Cursor\">Cursor</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/bits/trait.Bits.html\" title=\"trait bitvec::bits::Bits\">Bits</a>,&nbsp;</span>",synthetic:false,types:["bitvec::vec::BitVec"]},];
implementors["ink_core"] = [{text:"impl&lt;'_, T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Shl.html\" title=\"trait core::ops::bit::Shl\">Shl</a>&lt;R&gt; for &amp;'_ <a class=\"struct\" href=\"ink_core/storage/struct.Value.html\" title=\"struct ink_core::storage::Value\">Value</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.Shl.html\" title=\"trait core::ops::bit::Shl\">Shl</a>&lt;R&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"parity_codec/codec/trait.Codec.html\" title=\"trait parity_codec::codec::Codec\">Codec</a>,&nbsp;</span>",synthetic:false,types:["ink_core::storage::value::Value"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

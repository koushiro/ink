(function() {var implementors = {};
implementors["bitvec"] = [{text:"impl&lt;C, T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;I&gt; for <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bitvec/cursor/trait.Cursor.html\" title=\"trait bitvec::cursor::Cursor\">Cursor</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/bits/trait.Bits.html\" title=\"trait bitvec::bits::Bits\">Bits</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,&nbsp;</span>",synthetic:false,types:["bitvec::slice::BitSlice"]},{text:"impl&lt;C, T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;I&gt; for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bitvec/cursor/trait.Cursor.html\" title=\"trait bitvec::cursor::Cursor\">Cursor</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/bits/trait.Bits.html\" title=\"trait bitvec::bits::Bits\">Bits</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,&nbsp;</span>",synthetic:false,types:["bitvec::boxed::BitBox"]},{text:"impl&lt;C, T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;I&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"bitvec/cursor/trait.Cursor.html\" title=\"trait bitvec::cursor::Cursor\">Cursor</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/bits/trait.Bits.html\" title=\"trait bitvec::bits::Bits\">Bits</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,&nbsp;</span>",synthetic:false,types:["bitvec::vec::BitVec"]},];
implementors["ink_core"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_core/storage/struct.Value.html\" title=\"struct ink_core::storage::Value\">Value</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;T&gt; + <a class=\"trait\" href=\"parity_codec/codec/trait.Codec.html\" title=\"trait parity_codec::codec::Codec\">Codec</a>,&nbsp;</span>",synthetic:false,types:["ink_core::storage::value::Value"]},{text:"impl&lt;'_, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;&amp;'_ <a class=\"struct\" href=\"ink_core/storage/struct.Value.html\" title=\"struct ink_core::storage::Value\">Value</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"ink_core/storage/struct.Value.html\" title=\"struct ink_core::storage::Value\">Value</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAndAssign.html\" title=\"trait core::ops::bit::BitAndAssign\">BitAndAssign</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"parity_codec/codec/trait.Codec.html\" title=\"trait parity_codec::codec::Codec\">Codec</a>,&nbsp;</span>",synthetic:false,types:["ink_core::storage::value::Value"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

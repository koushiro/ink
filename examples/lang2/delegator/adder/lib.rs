// Copyright 2018-2019 Parity Technologies (UK) Ltd.
// This file is part of ink!.
//
// ink! is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// ink! is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with ink!.  If not, see <http://www.gnu.org/licenses/>.

#![cfg_attr(not(feature = "std"), no_std)]
#![feature(proc_macro_hygiene)]

use ink_core::storage;
use ink_lang2 as ink;
use accumulator::Accumulator;

#[ink::contract(version = "0.1.0")]
mod adder {
    /// Incremements the underlying accumulator's value.
    #[ink(storage)]
    struct Adder {
        /// The accumulator to store the value.
        accumulator: storage::Value<accumulator::Accumulator>,
    }

    impl Adder {
        /// Creates a new adder from the given accumulator.
        #[ink(constructor)]
        fn new(&mut self, accumulator: Accumulator) {
            self.accumulator.set(accumulator)
        }

        /// Increases the accumulator's value by some amount.
        #[ink(message)]
        fn inc(&mut self, by: i32) {
            self.accumulator.inc(by)
        }
    }
}

pub use crate::adder::Adder;
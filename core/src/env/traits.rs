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

use crate::{
    memory::vec::Vec,
    storage::Key,
};
use scale::{
    Codec,
    Decode,
};

/// Error encountered by calling a remote contract.
///
/// # Note
///
/// This is currently just a placeholder for potential future error codes.
#[derive(Debug, Copy, Clone)]
pub struct CallError;

/// Error encountered upon creating and instantiation a new smart contract.
///
/// # Note
///
/// This is currently just a placeholder for potential future error codes.
#[derive(Debug, Copy, Clone)]
pub struct CreateError;

#[cfg(not(feature = "test-env"))]
/// The environmental types usable by contracts defined with ink!.
pub trait EnvTypes {
    /// The type of an address.
    type AccountId: Codec + Clone + PartialEq + Eq;
    /// The type of balances.
    type Balance: Codec + Clone + PartialEq + Eq;
    /// The type of hash.
    type Hash: Codec + Clone + PartialEq + Eq;
    /// The type of timestamps.
    type Moment: Codec + Clone + PartialEq + Eq;
    /// The type of block number.
    type BlockNumber: Codec + Clone + PartialEq + Eq;
    /// The type of a call into the runtime
    type Call: scale::Encode;
}

#[cfg(feature = "test-env")]
/// The environmental types usable by contracts defined with ink!.
/// For the test environment extra trait bounds are required for using the types in unit tests.
pub trait EnvTypes {
    /// The type of an address.
    type AccountId: Codec + Clone + PartialEq + Eq + core::fmt::Debug;
    /// The type of balances.
    type Balance: Codec + Clone + PartialEq + Eq + core::fmt::Debug;
    /// The type of hash.
    type Hash: Codec + Clone + PartialEq + Eq + core::fmt::Debug;
    /// The type of timestamps.
    type Moment: Codec + Clone + PartialEq + Eq + core::fmt::Debug;
    /// The type of block number.
    type BlockNumber: Codec + Clone + PartialEq + Eq + core::fmt::Debug;
    /// The type of a call into the runtime.
    /// Requires Decode for inspecting raw dispatched calls in the test environment.
    type Call: Codec + Clone + PartialEq + Eq + core::fmt::Debug;
}

/// Types implementing this can act as contract storage.
pub trait EnvStorage {
    /// Stores the given value under the given key.
    ///
    /// # Safety
    ///
    /// This operation is unsafe because it does not check for key integrity.
    /// Users can compare this operation with a raw pointer dereferencing in Rust.
    unsafe fn store(key: Key, value: &[u8]);

    /// Clears the value stored under the given key.
    ///
    /// # Safety
    ///
    /// This operation is unsafe because it does not check for key integrity.
    /// Users can compare this operation with a raw pointer dereferencing in Rust.
    unsafe fn clear(key: Key);

    /// Loads data stored under the given key.
    ///
    /// # Safety
    ///
    /// This operation is unsafe because it does not check for key integrity.
    /// Users can compare this operation with a raw pointer dereferencing in Rust.
    unsafe fn load(key: Key) -> Option<Vec<u8>>;
}

/// The environment API usable by contracts defined with pDSL.
pub trait Env: EnvTypes {
    /// Returns the chain address of the contract.
    fn address() -> <Self as EnvTypes>::AccountId;

    /// Returns the chain balance of the contract.
    fn balance() -> <Self as EnvTypes>::Balance;

    /// Returns the chain address of the caller.
    fn caller() -> <Self as EnvTypes>::AccountId;

    /// Loads input data for contract execution.
    fn input() -> Vec<u8>;

    /// Get the random seed from the latest block.
    fn random_seed() -> <Self as EnvTypes>::Hash;

    /// Get the timestamp of the latest block.
    fn now() -> <Self as EnvTypes>::Moment;

    /// Get the block number of the latest block.
    fn block_number() -> <Self as EnvTypes>::BlockNumber;

    /// Returns the current gas price.
    fn gas_price() -> <Self as EnvTypes>::Balance;

    /// Returns the gas left for this contract execution.
    fn gas_left() -> <Self as EnvTypes>::Balance;

    /// Returns the amount of value that has been transferred.
    fn value_transferred() -> <Self as EnvTypes>::Balance;

    /// Returns from the contract execution with the given value.
    ///
    /// # Safety
    ///
    /// The external callers rely on the correct type of the encoded
    /// returned value. This API is unsafe because it does not provide
    /// guarantees on its own to always encode the expected type.
    fn return_data(data: &[u8]);

    /// Prints the given content to Substrate output.
    ///
    /// # Note
    ///
    /// Usable only in development (`--dev`) chains.
    fn println(content: &str);

    /// Deposits raw event data through Contracts module.
    fn deposit_raw_event(topics: &[<Self as EnvTypes>::Hash], data: &[u8]);

    /// Dispatches a call into the Runtime.
    fn dispatch_raw_call(data: &[u8]);

    /// Calls a remote smart contract without returning data
    fn call_invoke(
        callee: <Self as EnvTypes>::AccountId,
        gas: u64,
        value: <Self as EnvTypes>::Balance,
        input_data: &[u8],
    ) -> Result<(), CallError>;

    /// Calls a remote smart contract and return encoded data
    fn call_evaluate<T: Decode>(
        callee: <Self as EnvTypes>::AccountId,
        gas: u64,
        value: <Self as EnvTypes>::Balance,
        input_data: &[u8],
    ) -> Result<T, CallError>;

    /// Creates and instantiates a new smart contract.
    fn create(
        code_hash: <Self as EnvTypes>::Hash,
        gas_limit: u64,
        value: <Self as EnvTypes>::Balance,
        input_data: &[u8],
    ) -> Result<<Self as EnvTypes>::AccountId, CreateError>;
}

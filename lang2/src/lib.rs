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

#[cfg(not(feature = "std"))]
extern crate alloc;

mod dispatch;
mod error;
mod msg;

pub use ink_lang2_macro::contract;

pub use self::{
    dispatch::{
        Dispatch,
        DispatchMode,
        dispatch_constr,
        dispatch_msg,
        dispatch_msg_mut,
        DerefEnv,
    },
    error::{
        DispatchError,
        DispatchResult,
        DispatchRetCode,
    },
    msg::{
        Constr,
        Constructor,
        Dispatchable,
        FnInput,
        FnOutput,
        FnSelector,
        Message,
        Msg,
    },
};
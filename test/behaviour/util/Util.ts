/*
 * Copyright (C) 2022 Vaticle
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import assert = require("assert");

export async function assertThrows(testfunc: () => Promise<unknown>): Promise<void> {
    try {
        await testfunc();
    } catch {
        // Failed successfully
        return
    }
    assert.fail();
}

export async function assertThrowsWithMessage(testfunc: () => Promise<unknown>, message: string): Promise<void> {
    try {
        await testfunc();
    } catch (error) {
        assert(error.toString().includes(message));
        return
    }
    assert.fail();
}

export function splitString(value: string, separator: string, limit: number): string[] {
    const arr = value.split(separator);
    return arr.slice(0, limit).concat(arr.slice(limit).join(separator));
}

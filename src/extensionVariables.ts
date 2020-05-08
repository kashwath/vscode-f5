/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ExtensionContext, TreeView, StatusBarItem } from "vscode";
// import { KeyTar } from "./utils/keytar";
import * as keyTarType from "keytar";
import { MemFS } from './fileSystemProvider'
// import { } from './carTreeView'

type KeyTar = typeof keyTarType;

/**
 * Namespace for common variables used throughout the extension. They must be initialized in the activate() method of extension.ts
 */
export namespace ext {
    export let context: ExtensionContext;
    export let keyTar: KeyTar;
    export let memFs: MemFS;
    export let hostStatusBar: StatusBarItem;
    export let carTreeData: object | undefined;
}

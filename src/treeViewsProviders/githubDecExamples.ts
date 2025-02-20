import {
	TreeDataProvider,
	TreeItem,
	TreeItemCollapsibleState,
	Event,
	EventEmitter,
	Uri,
	Command
} from 'vscode';

import { ext } from '../extensionVariables';

export class ExampleDecsProvider implements TreeDataProvider<ExampleDec> {

	private _onDidChangeTreeData: EventEmitter<ExampleDec | undefined> = new EventEmitter<ExampleDec | undefined>();
	readonly onDidChangeTreeData: Event<ExampleDec | undefined> = this._onDidChangeTreeData.event;

	constructor() {
	}

	refresh(): void {
		this._onDidChangeTreeData.fire(undefined);
	}

	getTreeItem(element: ExampleDec): TreeItem {
		return element;
	}

	async getChildren(element?: ExampleDec): Promise<ExampleDec[]> {

		var treeItems = [];
		if (element) {
			// get example dec list for atc service
			if (element.label === 'AS3 Examples - Coming soon!') {

				await ext.extHttp.makeRequest({
					url: 'https://api.github.com/repos/F5Networks/f5-telemetry-streaming/contents/examples/declarations'
				})
					.then(resp => {
						treeItems = resp.data.map((item: any) => {
							return new ExampleDec(
								item.name,
								'',
								TreeItemCollapsibleState.None,
								{
									command: 'f5.getGitHubExample',
									title: '',
									arguments: [item.download_url]
								}
							);
						});
					});


			} else if (element.label === 'DO Examples') {
				// const examples = await getDOexamples();

				await ext.extHttp.makeRequest({
					url: 'https://api.github.com/repos/F5Networks/f5-declarative-onboarding/contents/examples'
				})
					.then(resp => {
						treeItems = resp.data.map((item: any) => {
							return new ExampleDec(
								item.name,
								'',
								TreeItemCollapsibleState.None,
								{
									command: 'f5.getGitHubExample',
									title: '',
									arguments: [item.download_url]
								}
							);
						});
					});

			} else if (element.label === 'TS Examples') {

				await ext.extHttp.makeRequest({
					url: 'https://api.github.com/repos/F5Networks/f5-telemetry-streaming/contents/examples/declarations'
				})
					.then(resp => {
						treeItems = resp.data.map((item: any) => {
							return new ExampleDec(
								item.name,
								'',
								TreeItemCollapsibleState.None,
								{
									command: 'f5.getGitHubExample',
									title: '',
									arguments: [item.download_url]
								}
							);
						});
					});


			} else if (element.label === 'CF Examples') {

				await ext.extHttp.makeRequest({
					url: 'https://api.github.com/repos/F5Networks/f5-cloud-failover-extension/contents/examples/declarations'
				})
					.then(resp => {
						treeItems = resp.data.map((item: any) => {
							return new ExampleDec(
								item.name,
								'',
								TreeItemCollapsibleState.None,
								{
									command: 'f5.getGitHubExample',
									title: '',
									arguments: [item.download_url]
								}
							);
						});
					});
			} else if (element.label === 'APM Examples') {
				// change url to when moved to F5Networks repo
				await ext.extHttp.makeRequest({
					url: 'https://api.github.com/repos/f5devcentral/vscode-f5-apm/contents/examples'
				})
					.then(resp => {
						treeItems = resp.data.map((item: any) => {
							return new ExampleDec(
								item.name,
								'',
								TreeItemCollapsibleState.None,
								{
									command: 'f5.getGitHubExample',
									title: '',
									arguments: [item.download_url]
								}
							);
						});
					});
			}

		} else {

			treeItems.push(
				new ExampleDec(
					'vscode-f5 Documentation',
					'Main vscode-f5 Documentation Site',
					TreeItemCollapsibleState.None,
					{
						command: 'vscode.open',
						title: '',
						arguments: [Uri.parse('https://f5devcentral.github.io/vscode-f5/#/')]
					}
				)
			);


			treeItems.push(
				new ExampleDec(
					'vscode-f5 repo',
					'Main vscode-f5 repo for code/issues',
					TreeItemCollapsibleState.None,
					{
						command: 'vscode.open',
						title: '',
						arguments: [Uri.parse('https://github.com/f5devcentral/vscode-f5')]
					}
				)
			);


			treeItems.push(
				new ExampleDec(
					'f5-fasting repo',
					'Repo used to document usage and examples used in the extension',
					TreeItemCollapsibleState.None,
					{
						command: 'vscode.open',
						title: '',
						arguments: [Uri.parse('https://github.com/DumpySquare/f5-fasting')]
					}
				)
			);


			treeItems.push(
				new ExampleDec(
					'AS3 User Guide',
					'Best way to get to all documentation official F5 CloudDocs documenation for as3, including: installing, using, HTTP methods, example declarations...',
					TreeItemCollapsibleState.None,
					{
						command: 'vscode.open',
						title: '',
						arguments: [Uri.parse('https://clouddocs.f5.com/products/extensions/f5-appsvcs-extension/latest/userguide/')]
					}
				)
			);


			treeItems.push(
				new ExampleDec(
					'AS3 Examples - Coming soon!',
					'Please comment in git repo if you want all AS3 example declarations to show up like DO/TS below',
					TreeItemCollapsibleState.None,
					{
						command: 'vscode.open',
						title: '',
						arguments: [Uri.parse('https://github.com/F5Networks/f5-appsvcs-extension/issues/280')]
					}
				)
			);


			treeItems.push(
				new ExampleDec(
					'DO Examples',
					'DO examples direct from /F5Networks/f5-declarative-onboarding repo',
					TreeItemCollapsibleState.Collapsed,
					{
						command: 'vscode.open',
						title: '',
						arguments: [Uri.parse('https://github.com/F5Networks/f5-declarative-onboarding/tree/master/examples')]
					}
				)
			);


			treeItems.push(
				new ExampleDec(
					'TS Examples',
					'TS examples direct from /F5Networks/f5-telemetry-streaming repo',
					TreeItemCollapsibleState.Collapsed,
					{
						command: 'vscode.open',
						title: '',
						arguments: [Uri.parse('https://github.com/F5Networks/f5-telemetry-streaming/tree/master/examples')]
					}
				)
			);


			treeItems.push(
				new ExampleDec(
					'CF Examples',
					'CF examples direct from /F5Networks/f5-cloud-failover-extension repo',
					TreeItemCollapsibleState.Collapsed,
					{
						command: 'vscode.open',
						title: '',
						arguments: [Uri.parse('https://github.com/F5Networks/f5-cloud-failover-extension/tree/master/examples')]
					}
				)
			);
			treeItems.push(
				new ExampleDec(
					'APM Examples',
					'APM examples direct from f5devcentral/vscode-f5-apm repo',
					TreeItemCollapsibleState.Collapsed,
					{
						command: 'vscode.open',
						title: '',
						// change url to when moved to F5Networks repo
						arguments: [Uri.parse('https://github.com/f5devcentral/vscode-f5-apm/tree/main/examples')]
					}
				)
			);
		}
		return Promise.resolve(treeItems);
	}
}


export class apmPolicyDecsProvider implements TreeDataProvider<ExampleDec> {

	private _onDidChangeTreeData: EventEmitter<ExampleDec | undefined> = new EventEmitter<ExampleDec | undefined>();
	readonly onDidChangeTreeData: Event<ExampleDec | undefined> = this._onDidChangeTreeData.event;

	constructor() {
	}

	refresh(): void {
		this._onDidChangeTreeData.fire(undefined);
	}

	getTreeItem(element: ExampleDec): TreeItem {
		return element;
	}

	async getChildren(element?: ExampleDec): Promise<ExampleDec[]> {
		var accessPolicies: any[] = [];
		var treeItems: any[] | PromiseLike<any[]> = [];
		await ext.extHttp.makeRequest({
			method: 'GET',
			//enter IP address and credentials here
			url: `https://0.0.0.0:5443/api/v1/login`,
			auth: {
				username: 'username',
				password: 'password'
			}
		})

			.then(async (resp) => {
				let token = resp.data.token;
				await ext.extHttp.makeRequest({
					method: 'GET',
					url: `https://0.0.0.0:5443/api/v1/access-policies`,
					headers: {
						Authorization: `Bearer ${token}`
					}
				}).then(apmpolicies => {
					accessPolicies = apmpolicies.data._embedded.accessPolicies;
				})
			});

		if (element) {
			if (element.label === 'APM Policies') {
				treeItems = accessPolicies.map((item: any) => {
					return new ExampleDec(
						item.name,
						'',
						TreeItemCollapsibleState.None,
						{
							command: 'f5.apmPolicyDisplay',
							title: '',
							arguments: [item]
						},
						'apmPolicy'
					);
				});
			}
		}
		else {
			treeItems.push(
				new ExampleDec(
					'APM Policies',
					'APM examples direct from f5devcentral/vscode-f5-apm repo',
					TreeItemCollapsibleState.Collapsed,
					{
						command: 'vscode.open',
						title: '',
						// change url to when moved to F5Networks repo
						arguments: [Uri.parse('https://github.com/f5devcentral/vscode-f5-apm/tree/main/examples')]
					}
				)
			);
		}
		return Promise.resolve(treeItems);
	}

	/**
     * delete Access policy
     * 
     * @param policy extracts policy id from tree class item (ExampleDec)
    */
	async deletePolicy(policy: ExampleDec): Promise<void> {

        const id = policy?.command?.arguments?.[0].id;
		await ext.extHttp.makeRequest({
			method: 'GET',
			//enter IP address and credentials here
			url: `https://0.0.0.0:5443/api/v1/login`,
			auth: {
				username: 'username',
				password: 'password'
			}
		})

			.then(async (resp) => {
				let token = resp.data.token;
				await ext.extHttp.makeRequest({
					method: 'DELETE',
					url: `https://0.0.0.0:5443/api/v1/access-policies/${id}`,
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				.then(async (resp) => {
					let jobId = resp.data.id;
					await ext.extHttp.makeRequest({
						method: 'GET',
						url: `https://0.0.0.0:5443/api/v1/jobs/${jobId}`,
						headers: {
							Authorization: `Bearer ${token}`
						}
					})
					.then(async (resp) => {
						let status = resp.data.status;
						if (status !== "SUCCEEDED"){
							throw new Error("Deleting apm policy failed.");
						}
				});
				});
			});
    }
}



export class ExampleDec extends TreeItem {
	constructor(
		public readonly label: string,
		public tooltip: string,
		public readonly collapsibleState: TreeItemCollapsibleState,
		public readonly command?: Command,
		public contextValue?: string
	) {
		super(label, collapsibleState);
	}
}
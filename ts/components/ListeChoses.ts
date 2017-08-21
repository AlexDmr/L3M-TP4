import {Component, Input, OnInit} from "@angular/core";
import {Chose, ListeChoses as ListeChosesNF} from "@NF/nf";
import {ListeChosesService} from "@NF/service";

const htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>{{titre}}</h1>
			<form>
				<input class="new-todo" placeholder="Que faire?" #newTodo autofocus>
			</form>
		</header>
		<section class="main">
			<input  class="toggle-all"
			        type="checkbox"
			        />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
            </ul>
		</section>
        <footer class="footer">
            <span class="todo-count"><strong></strong> restantes</span>
            <ul class="filters">
                <li>
                    <a class="filterAll">Tous</a>
                </li>
                <li>
                    <a class="filterActives">Actifs</a>
                </li>
                <li>
                    <a class="filterCompleted">Complétés</a>
                </li>
            </ul>
            <button class="clear-completed">Supprimer cochées</button>
        </footer>
	</section>
	<hr/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section>
`;

type filterChose = (c: Chose) => boolean;

@Component({
    selector: "liste-choses",
    template: htmlTemplate
})
export class ListeChoses implements OnInit {
    @Input() titre: string;
    public nf: ListeChosesNF;
    private choses: Chose[] = [];
    private currentFilter: filterChose;

    constructor(private serviceListe: ListeChosesService) {
        console.log("serviceListe:", this.serviceListe);
        console.log("currentFilter:", this.currentFilter);
    }

    ngOnInit(): void {
        ListeChosesService.getData().then((nf) => {
            this.nf = nf;
            this.choses = nf.choses;
        });
    }

    getChoses(): Chose[] {
        return this.choses;
    }
}

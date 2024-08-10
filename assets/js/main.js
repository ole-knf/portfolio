jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "caseyscarborough", selector: "#ghfeed" });


});

document.addEventListener('DOMContentLoaded', function() {
    const toggleLinks = document.querySelectorAll('.toggle-text');
    
    toggleLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const summary = this.parentNode;
            const isExpanded = summary.classList.toggle('expanded');
            this.textContent = isExpanded ? '... read less' : '... read more';
        });
    });

    const containers = document.querySelectorAll('.project-container');

    containers.forEach(container => {
        const items = container.querySelectorAll('.project-item');
        console.log(items.length)
        const showMoreButton = container.querySelector('.show-more');
                
        // Initially display only the top 3 items
        items.forEach((item, index) => {
            if (index < 3) {
                item.classList.add('visible');
            }
        });
        
        if (items.length > 4) { // 4 items allowed: 3 projects + button
            showMoreButton.style.display = 'block'; // Show button if more than 3 items
        } else {
            showMoreButton.style.display = 'none'; // Hide button if 3 or fewer items
        }

        // Show more items when the button is clicked
        showMoreButton.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.add('visible');
            });
            showMoreButton.style.display = 'none'; // Hide the button after clicking
        });
    });
});


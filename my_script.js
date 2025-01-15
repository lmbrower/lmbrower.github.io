$('#heClickedIt').click(function() {
    $('#hiddenPart').attr('hidden', false);
    getAJob();
});

function getAJob() {
    console.log('here');
    let audio = new Audio('get_a_job.ogg');
    audio.play();
}

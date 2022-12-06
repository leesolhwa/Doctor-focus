$(function(){
    var user_phone_num = '';
    $('.cert_btn').on('click', function(){
        user_phone_num = $(this).closest('#f_find').find('#user_id').val();
        if ( user_phone_num == '' ) {
            alert('휴대전화 번호를 입력해주세요');
            $(this).closest('#f_find').find('#user_id').focus();
            return false;
        } else {
            console.log('user_phone_num:',user_phone_num);
        }
    });
    $('input[name="all_agree"]').on('click',function() {
        if($('input[name="all_agree"]').is(':checked')) {
            $('.chk_wrap input[type="checkbox"]').prop('checked', true);
        } else {
            $('.chk_wrap input[type="checkbox"]').prop('checked', false);
        }
    });
    $('.chk_wrap input[type="checkbox"]').on('click',function() {
        var total_chk = $('.chk_wrap input[type="checkbox"]').length;
        var cw_checked = $('.chk_wrap input[type="checkbox"]:checked').length;

        if(total_chk != cw_checked) {
            $('input[name="all_agree"]').prop('checked', false);
        } else {
            $('input[name="all_agree"]').prop('checked', true);
        }
    });
    $('.chk_wrap label a').on('click', function(){
        if ( $(this).closest('label').find('input').is(':checked') ) {
            $(this).closest('label').find('input').prop('checked', false);
        } else {
            $(this).closest('label').find('input').prop('checked', true);
        }
        if ( $(this).hasClass('terms_pop_btn') ) {
            $('.pop-layer#terms_pop').slideToggle(600);
        } else if ( $(this).hasClass('privacy_pop_btn') ) {
            $('.pop-layer#privacy_pop').slideToggle(600);
        }
    });
    $('.pop-layer .cbtn').on('click', function(){
       $(this).closest('.pop-layer').slideToggle(600);
    });

});
function findPw_submit(f) {
    if (f.user_id.value == '') {
        alert('휴대전화 번호를 입력해주세요');
        $('#f_find').find('#user_id').focus();
        return false;
    }
    if (f.tk_number.value == '') {
        alert('인증번호를 입력해주세요');
        $('#f_find').find('#tk_number').focus();
        return false;
    }
    return true;
}
function findId_submit(f) {
    if (f.user_id.value == '') {
        alert('휴대전화 번호를 입력해주세요');
        $('#f_find').find('#user_id').focus();
        return false;
    }
    if (f.tk_number.value == '') {
        alert('인증번호를 입력해주세요');
        $('#f_find').find('#tk_number').focus();
        return false;
    }
    return true;
}
function register_submit(f) {
    if (f.user_id.value == '') {
        alert('휴대전화 번호를 입력해주세요');
        $('#f_register').find('#user_id').focus();
        return false;
    }
    if (f.tk_number.value == '') {
        alert('인증번호를 입력해주세요');
        $('#f_register').find('#tk_number').focus();
        return false;
    }
    if (f.user_password.value != f.user_password_chk.value) {
        alert('비밀번호를 정확히 입력해주세요');
        $('#f_register').find('#user_pw').focus();
        return false;
    }
    return true;
}

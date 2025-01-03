
CREATE OR REPLACE PROCEDURE SetMemberAdminByEmail(
    IN pEmail VARCHAR(128)
)
BEGIN
    DECLARE memberId INT;

    SELECT member_id
    INTO memberId
    FROM MEMBERS
    WHERE login = pEmail;

    INSERT INTO ADMINISTRATORS(member_id) VALUES (memberId);
END
